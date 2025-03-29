"use client"

import React, { useState } from "react"
import Comment from "./Comment"
import Image from "next/image"

interface CommentData {
  id: string
  author: {
    name: string
    avatarUrl: string
  }
  timestamp: string
  content: string
  likes: number
}

const mockComments: CommentData[] = [
  {
    id: "1",
    author: {
      name: "Carl Adams",
      avatarUrl: "/avatars/carl.png",
    },
    timestamp: "1 hour ago",
    content: "Great insights. Learned a lot!",
    likes: 2,
  },
  {
    id: "2",
    author: {
      name: "Jane Doe",
      avatarUrl: "/avatars/jane.png",
    },
    timestamp: "3 hours ago",
    content: "Thanks for breaking it down so clearly.",
    likes: 5,
  },
]

export default function CommentSection() {
  const [comments, setComments] = useState<CommentData[]>(mockComments)
  const [newComment, setNewComment] = useState("")

  const handlePost = () => {
    if (!newComment.trim()) return

    const newEntry: CommentData = {
      id: Date.now().toString(),
      author: {
        name: "You",
        avatarUrl: "/avatars/you.png",
      },
      timestamp: "Just now",
      content: newComment,
      likes: 0,
    }

    setComments((prev) => [newEntry, ...prev])
    setNewComment("")
  }

  return (
    <section className="mt-10">
      <h2 className="text-xl font-semibold mb-1">12 Comments</h2>
      <p className="text-slate-400 text-sm mb-6">Write a comment</p>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((c) => (
          <Comment key={c.id} {...c} />
        ))}
      </div>

      <div className="mt-6 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 flex items-center gap-3">
        <Image
          src="/avatars/alex.png"
          alt="You"
          width={32}
          height={32}
          className="rounded-full object-cover"
        />
        <input
          type="text"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="flex-1 bg-transparent text-white text-sm focus:outline-none placeholder:text-slate-400"
        />
        <button
          onClick={handlePost}
          className="text-sm text-blue-500 font-medium hover:underline"
        >
          Post
        </button>
      </div>
    </section>
  )
}
