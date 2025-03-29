"use client"

import React from "react"
import PostCard, { PostCardProps } from "./PostCard"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import HeaderRecentPosts from "./HeaderRecentPosts"

interface RecentPostsProps {
  posts: PostCardProps[]
  onLoadMore?: () => void
  hasMore?: boolean
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function RecentPosts({
  posts,
  onLoadMore,
  hasMore = false,
}: RecentPostsProps) {
  const router = useRouter()

  return (
    // Static main container so it fits nicely under the navbar
    <main className="bg-slate-900 text-white pt-8 pb-16">
      <section className="max-w-7xl mx-auto px-4 md:px-8">
      <HeaderRecentPosts />


        {/* Posts Grid with staggered animation on each card */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {posts.map((post) => (
            <motion.div key={post.id} variants={cardVariants}>
              <PostCard
                {...post}
                onClick={(postId) => router.push(`/posts/${postId}`)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button with a subtle button animation */}
        {hasMore && (
          <div className="flex justify-center mt-10">
            <motion.button
              onClick={onLoadMore}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-slate-700 hover:bg-slate-600 text-white rounded-xl py-2 px-6 font-medium transition"
            >
              Load More
            </motion.button>
          </div>
        )}
      </section>
    </main>
  )
}
