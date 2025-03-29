"use client"

import React from "react"
import { motion } from "framer-motion"
import { ThumbsUp, MessageCircle } from "lucide-react"
import Image from "next/image"

export interface PostCardProps {
  id: string
  title: string
  description: string
  author: string
  timestamp: string
  tags?: string[]
  imageUrl?: string
  reactionCount?: number
  commentCount?: number
  onClick?: (postId: string) => void
}

export default function PostCard({
  id,
  title,
  description,
  author,
  timestamp,
  tags = [],
  imageUrl,
  reactionCount = 0,
  commentCount = 0,
  onClick,
}: PostCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick?.(id)}
      className="relative h-64 w-full rounded-xl overflow-hidden shadow-md bg-slate-800 cursor-pointer"
    >
      {/* Background image (blurred) */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover blur-sm opacity-60"
          sizes="(max-width: 768px) 100vw,
                 (max-width: 1200px) 50vw,
                 33vw"
        />
      )}

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col justify-end h-full p-4">
        {/* Tag chips */}
        <div className="flex flex-wrap gap-2 mb-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-600 text-white text-xs font-medium px-2 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title + Description */}
        <h3 className="text-white text-lg font-semibold line-clamp-1">{title}</h3>
        <p className="text-gray-300 text-sm line-clamp-2 mt-1">
          {description}
        </p>

        {/* Footer row: author, time, reactions, comments */}
        <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
          <span>
            By {author} · {timestamp}
          </span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <ThumbsUp className="w-4 h-4 text-gray-400" />
              <span>{reactionCount}</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="w-4 h-4 text-gray-400" />
              <span>{commentCount}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
