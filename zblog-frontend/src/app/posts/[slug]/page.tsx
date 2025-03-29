"use client"

import React from "react"
import PostDetail from "@/components/posts/PostDetail/PostDetail"
import { mockPost } from "./mockPost"

export default function PostPage() {
  return <PostDetail post={mockPost} />
}
