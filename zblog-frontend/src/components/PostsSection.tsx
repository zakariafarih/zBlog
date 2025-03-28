"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export interface Post {
  id: number
  title: string
  excerpt: string
  date: string
  image?: string
}

const defaultPosts: Post[] = [
  {
    id: 1,
    title: "Understanding Microservices",
    excerpt: "A deep dive into microservices architecture and best practices.",
    date: "2025-03-01",
    image: "https://picsum.photos/300/200?random=1",
  },
  {
    id: 2,
    title: "Mastering Next.js",
    excerpt: "Learn how to build fast, scalable web apps with Next.js.",
    date: "2025-03-05",
    image: "https://picsum.photos/300/200?random=2",
  },
  {
    id: 3,
    title: "Frontend Animations with Framer Motion",
    excerpt: "Bring your UI to life with smooth and interactive animations.",
    date: "2025-03-10",
    image: "https://picsum.photos/300/200?random=3",
  },
]

export default function PostsSection({ posts = defaultPosts }: { posts?: Post[] }) {
  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold mb-6 text-slate-100">Latest Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 12, delay: post.id * 0.2 }}
            className="bg-slate-800 border border-slate-700 rounded-lg shadow-md overflow-hidden"
          >
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="font-semibold text-slate-100">{post.title}</h3>
              <p className="text-slate-400 text-sm">{post.excerpt}</p>
              <p className="text-slate-500 text-xs mt-2">{post.date}</p>
              <Link
                href={`/posts/${post.id}`}
                className="mt-2 inline-block text-blue-400 hover:underline"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
