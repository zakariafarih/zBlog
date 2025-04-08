# --------------- python-classifier Dockerfile ---------------
    FROM python:3.9-slim

    WORKDIR /app

    COPY requirements.txt /app/
    RUN pip install --no-cache-dir -r requirements.txt

    COPY . /app

    # Ensure the models folder exists
    RUN mkdir -p /app/models

    EXPOSE 8001

    CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8001"]
    