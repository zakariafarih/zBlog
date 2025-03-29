"use client"

import React from "react"
import { ThumbsUp, MessageSquare, Share2, Bookmark } from "lucide-react"
import { motion } from "framer-motion"
import clsx from "clsx"

interface ReactionPanelProps {
  liked?: boolean
  bookmarked?: boolean
  onLike?: () => void
  onCommentClick?: () => void
  onShare?: () => void
  onBookmark?: () => void
}

const iconButtonStyle = (active = false) =>
  clsx(
    "w-10 h-10 flex items-center justify-center rounded-md transition-colors border border-slate-700 hover:bg-slate-700",
    active ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-300"
  )

export default function PostReactionPanel({
  liked,
  bookmarked,
  onLike,
  onCommentClick,
  onShare,
  onBookmark,
}: ReactionPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="hidden lg:flex flex-col gap-4 sticky top-28 ml-6"
    >
      <button onClick={onLike} className={iconButtonStyle(liked)}>
        <ThumbsUp size={18} />
      </button>

      <button onClick={onCommentClick} className={iconButtonStyle()}>
        <MessageSquare size={18} />
      </button>

      <button onClick={onShare} className={iconButtonStyle()}>
        <Share2 size={18} />
      </button>

      <button onClick={onBookmark} className={iconButtonStyle(bookmarked)}>
        <Bookmark size={18} />
      </button>
    </motion.div>
  )
}
