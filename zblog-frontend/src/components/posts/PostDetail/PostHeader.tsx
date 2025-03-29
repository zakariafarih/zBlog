"use client"

import React from "react"
import Image from "next/image"
import PostMetadata from "./PostMetadata"

interface PostHeaderProps {
  title: string
  coverImageUrl: string
  author: {
    name: string
    avatarUrl: string
  }
  publishedAt: Date
  tag: string
}

export default function PostHeader({
  title,
  coverImageUrl,
  author,
  publishedAt,
  tag,
}: PostHeaderProps) {
  return (
    <div className="mb-6">
      {/* Banner image */}
      <div className="w-full h-48 md:h-56 lg:h-64 overflow-hidden rounded-md mb-6">
        <Image
          src={coverImageUrl}
          alt="Post cover"
          width={1200}
          height={400}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
        {title}
      </h1>

      {/* Metadata (Author, time, tag) */}
      <PostMetadata author={author} publishedAt={publishedAt} tag={tag} />
    </div>
  )
}
