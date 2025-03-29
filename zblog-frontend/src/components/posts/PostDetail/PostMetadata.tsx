"use client"

import React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { formatDistanceToNow } from "date-fns"

interface PostMetadataProps {
  author: {
    name: string
    avatarUrl: string
  }
  publishedAt: Date
  tag: string
  className?: string
}

export default function PostMetadata({
  author,
  publishedAt,
  tag,
  className,
}: PostMetadataProps) {
  return (
    <div className={cn("flex items-center gap-3 text-slate-400 text-sm", className)}>
      {/* Avatar */}
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <Image
          src={author.avatarUrl}
          alt={author.name}
          width={32}
          height={32}
          className="object-cover"
        />
      </div>

      {/* Name, Time, Tag */}
      <div className="flex flex-wrap items-center gap-1.5">
        <span className="text-white font-medium">{author.name}</span>
        <span>•</span>
        <span>{formatDistanceToNow(publishedAt, { addSuffix: true })}</span>
        <span>•</span>
        <span className="text-blue-400">{tag}</span>
      </div>
    </div>
  )
}
