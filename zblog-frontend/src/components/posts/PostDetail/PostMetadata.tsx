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
  tags: string[];
  className?: string
}

export default function PostMetadata({
  author,
  publishedAt,
  tags,
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
        <div className="flex gap-2 flex-wrap mt-1">
        {Array.isArray(tags) &&
          tags.map((tag) => (
            <span
              key={tag}
              className="bg-blue-600 text-white px-2 py-0.5 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
        ))}
        </div>
      </div>
    </div>
  )
}
