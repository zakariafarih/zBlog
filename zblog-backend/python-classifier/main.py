import os
import json
import logging
from fastapi import FastAPI, HTTPException, Query
from pydantic import BaseModel
from typing import Dict
import numpy as np
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

# Set up logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

CACHE_FILE = "cache.json"

CATEGORIES = ['tech', 'art', 'science', 'writing', 'gaming', 'culture', 'business', 'lifestyle', 'misc']

# Load cache if available
if os.path.exists(CACHE_FILE):
    with open(CACHE_FILE, "r") as f:
        cache: Dict[str, str] = json.load(f)
else:
    cache = {}

# Try loading the model and handle errors gracefully
try:
    model = SentenceTransformer('all-MiniLM-L6-v2', cache_folder="./models")
except Exception as e:
    logger.error("Error loading SentenceTransformer model: %s", e)
    raise RuntimeError("Error loading SentenceTransformer model") from e

category_embeddings = model.encode(CATEGORIES)

class CategoryResponse(BaseModel):
    tag: str
    category: str

def save_cache():
    """Function to save cache to file"""
    try:
        with open(CACHE_FILE, "w") as f:
            json.dump(cache, f)
        logger.info("Cache saved successfully.")
    except Exception as e:
        logger.error("Error saving cache: %s", e)

@app.get("/classifier/api/category", response_model=CategoryResponse)
def get_category(tag: str = Query(..., description="The tag to categorize")):
    """Endpoint to get the category of a tag"""
    # Return cached result if available
    if tag in cache:
        logger.info("Cache hit for tag: %s", tag)
        return CategoryResponse(tag=tag, category=cache[tag])
    
    # Log when we're processing a new tag
    logger.info("Cache miss for tag: %s. Categorizing...", tag)

    try:
        tag_embedding = model.encode([tag])
    except Exception as e:
        logger.error("Error encoding tag %s: %s", tag, e)
        raise HTTPException(status_code=500, detail=f"Error encoding tag: {e}")
    
    # Calculate similarity and determine the best category
    try:
        similarities = cosine_similarity(tag_embedding, category_embeddings)[0]
        best_index = int(np.argmax(similarities))
        best_category = CATEGORIES[best_index]
    except Exception as e:
        logger.error("Error calculating similarity for tag %s: %s", tag, e)
        raise HTTPException(status_code=500, detail="Error calculating similarity")
    
    # Cache the result
    cache[tag] = best_category
    save_cache()
    
    logger.info("Tag %s categorized as %s", tag, best_category)
    return CategoryResponse(tag=tag, category=best_category)

@app.get("/classifier/api/category/cache")
def get_cache_endpoint():
    """Endpoint to get the current cache"""
    return cache

@app.delete("/classifier/api/category/cache")
def clear_cache():
    """Endpoint to clear the cache"""
    global cache
    cache = {}
    if os.path.exists(CACHE_FILE):
        try:
            os.remove(CACHE_FILE)
            logger.info("Cache file deleted successfully.")
        except Exception as e:
            logger.error("Error deleting cache file: %s", e)
    return {"detail": "Cache cleared"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8001, reload=True)
