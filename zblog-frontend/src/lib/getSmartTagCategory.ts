import * as use from '@tensorflow-models/universal-sentence-encoder'
import * as tf from '@tensorflow/tfjs'
import '@tensorflow/tfjs-backend-cpu'

export type TagCategory =
  | 'tech'
  | 'art'
  | 'science'
  | 'writing'
  | 'gaming'
  | 'culture'
  | 'business'
  | 'lifestyle'
  | 'misc'

const categories: TagCategory[] = [
  'tech',
  'art',
  'science',
  'writing',
  'gaming',
  'culture',
  'business',
  'lifestyle',
  'misc',
]

let model: use.UniversalSentenceEncoder | null = null
const categoryEmbeddings: { [key in TagCategory]?: tf.Tensor } = {}
const cache: { [tag: string]: TagCategory } = {}

async function loadModelAndEmbeddings() {
  if (!model) {
    await tf.setBackend('cpu')
    await tf.ready()

    model = await use.load()
    const embeddings = await model.embed(categories)

    for (let i = 0; i < categories.length; i++) {
      categoryEmbeddings[categories[i]] = embeddings.slice([i, 0], [1, embeddings.shape[1]])
    }
  }
}

function cosineSimilarity(a: tf.Tensor, b: tf.Tensor) {
  const dotProduct = a.mul(b).sum()
  const normA = a.norm()
  const normB = b.norm()
  return dotProduct.div(normA.mul(normB))
}

export async function getSmartTagCategory(tagName: string): Promise<TagCategory> {
  if (cache[tagName]) return cache[tagName]

  await loadModelAndEmbeddings()
  if (!model) return 'misc'

  const tagEmbedding = await model.embed([tagName])
  let bestCategory: TagCategory = 'misc'
  let bestScore = -1

  for (const category of categories) {
    const categoryEmbedding = categoryEmbeddings[category]
    if (categoryEmbedding) {
      const simTensor = cosineSimilarity(tagEmbedding, categoryEmbedding)
      const sim = (await simTensor.data())[0]
      if (sim > bestScore) {
        bestScore = sim
        bestCategory = category
      }
    }
  }

  cache[tagName] = bestCategory
  return bestCategory
}
