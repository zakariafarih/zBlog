"use client"
export const dynamic = "force-dynamic";

import React from "react"
import { mockPost } from "./mockPost"

import nextDynamic from "next/dynamic"

const PostDetail = nextDynamic(() => import("@/components/posts/PostDetail/PostDetail"), { ssr: false })

export default function PostPage() {
  return <PostDetail post={mockPost} />
}
