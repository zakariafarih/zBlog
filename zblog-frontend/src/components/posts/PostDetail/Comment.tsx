"use client"

import React from "react"
import Image from "next/image"
import { MoreVertical } from "lucide-react"

interface CommentProps {
  author: {
    name: string
    avatarUrl: string
  }
  timestamp: string
  content: string
  likes: number
}

export default function Comment({ author, timestamp, content, likes }: CommentProps) {
  return (
    <div className="flex items-start gap-4 py-4 border-b border-slate-700">
      {/* Avatar */}
      <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden">
        <Image
          src={author.avatarUrl}
          alt={author.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Top Row */}
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="font-semibold text-white">{author.name}</span>
            <span className="text-slate-500">•</span>
            <span>{timestamp}</span>
          </div>
          <MoreVertical className="w-4 h-4 text-slate-500 cursor-pointer hover:text-slate-300" />
        </div>

        {/* Comment Content */}
        <p className="text-slate-100 text-sm mb-2">{content}</p>

        {/* Bottom Row */}
        <div className="flex items-center justify-between text-sm text-slate-400">
          <button className="hover:underline text-sm">Reply</button>
          <span>{likes}</span>
        </div>
      </div>
    </div>
  )
}
