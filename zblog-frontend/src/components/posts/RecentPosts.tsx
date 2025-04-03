'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import PostCard, { PostCardProps } from './PostCard'
import HeaderRecentPosts from './HeaderRecentPosts'
import { getAuthorName, hasAuthor } from '@/services/authorCache'
import { useAuth } from 'react-oidc-context'

interface RawPost extends PostCardProps {
  authorId?: string
}

interface RecentPostsProps {
  posts: RawPost[]
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
  const auth = useAuth()
  const [resolvedPosts, setResolvedPosts] = useState<PostCardProps[]>([])

  useEffect(() => {
    const resolveAuthors = async () => {
      const token = auth.user?.access_token

      const updatedPosts = await Promise.all(
        posts.map(async (post) => {
          if (post.authorId) {
            const author = await getAuthorName(post.authorId, token)
            return { ...post, author }
          }
          return post
        })
      )

      setResolvedPosts(updatedPosts)
    }

    resolveAuthors()
  }, [posts, auth.user])

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <HeaderRecentPosts />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {resolvedPosts.map((post) => (
          <motion.div key={post.id} variants={cardVariants}>
            <PostCard
              {...post}
              onClick={(postId) => router.push(`/posts/${postId}`)}
            />
          </motion.div>
        ))}
      </motion.div>

      {hasMore && (
        <div className="flex justify-center mt-10 border-t border-slate-700 pt-10">
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
  )
}
