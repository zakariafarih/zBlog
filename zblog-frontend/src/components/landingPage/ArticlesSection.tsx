"use client"

import { motion } from "framer-motion"

export interface Article {
  id: number
  title: string
  summary: string
  image?: string
}

const defaultArticles: Article[] = [
  {
    id: 1,
    title: "Article on UI Design",
    summary: "Tips and tricks for modern, responsive UI design.",
    image: "https://picsum.photos/300/200?random=4",
  },
  {
    id: 2,
    title: "Understanding Auth Flows",
    summary: "A comprehensive guide to authentication in web apps.",
    image: "https://picsum.photos/300/200?random=5",
  },
  {
    id: 3,
    title: "Deploying with Kubernetes",
    summary: "Step-by-step instructions for container orchestration.",
    image: "https://picsum.photos/300/200?random=6",
  },
]

export default function ArticlesSection({
  articles = defaultArticles,
}: {
  articles?: Article[]
}) {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-slate-100">Seat Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <motion.div
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 12, delay: article.id * 0.2 }}
            className="bg-slate-800 border border-slate-700 rounded-lg shadow-md overflow-hidden"
          >
            {article.image && (
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="font-semibold text-slate-100">{article.title}</h3>
              <p className="text-slate-400 text-sm">{article.summary}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
