"use client"

export const dynamic = "force-dynamic";

import React from "react"
import type { PostCardProps } from "@/components/posts/PostCard"
import nextDynamic from "next/dynamic";

const RecentPosts = nextDynamic(() => import("@/components/posts/RecentPosts"), { ssr: false })

const mockPosts: PostCardProps[] = [
  {
    id: "1",
    title: "Mastering TypeScript",
    description: "Discover the power of static typing in JavaScript and how it can improve your productivity.",
    author: "Zakaria",
    timestamp: "2 hours ago",
    tags: ["Coding", "TypeScript"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    reactionCount: 24,
    commentCount: 5,
  },
  {
    id: "2",
    title: "Exploring Microservices Architecture",
    description: "Learn how a microservices architecture can help you build scalable applications.",
    author: "Alice",
    timestamp: "3 hours ago",
    tags: ["Microservices", "Architecture"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    reactionCount: 35,
    commentCount: 12,
  },
  {
    id: "3",
    title: "UI/UX Best Practices",
    description: "Designing interfaces that are not only visually appealing but also provide great user experience.",
    author: "Bob",
    timestamp: "5 hours ago",
    tags: ["Design", "UI/UX"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    reactionCount: 10,
    commentCount: 8,
  },
  {
    id: "4",
    title: "Understanding Cloud-Native Development",
    description: "An in-depth look into building applications using cloud-native technologies and microservices.",
    author: "Clara",
    timestamp: "1 day ago",
    tags: ["Cloud", "Microservices"],
    imageUrl: "https://picsum.photos/600/400?random=4",
    reactionCount: 18,
    commentCount: 3,
  },
  {
    id: "5",
    title: "The Future of AI in Software Development",
    description: "How artificial intelligence is reshaping coding, testing, and deployment workflows.",
    author: "Derek",
    timestamp: "2 days ago",
    tags: ["AI", "Software Development"],
    imageUrl: "https://picsum.photos/600/400?random=5",
    reactionCount: 44,
    commentCount: 16,
  },
  {
    id: "6",
    title: "Boosting Productivity with VS Code",
    description: "Tips, tricks, and essential extensions to make Visual Studio Code your power tool.",
    author: "Eva",
    timestamp: "3 days ago",
    tags: ["Productivity", "VS Code"],
    imageUrl: "https://picsum.photos/600/400?random=6",
    reactionCount: 27,
    commentCount: 6,
  },
]

export default function RecentPostsPage() {
  const handleLoadMore = () => {
    console.log("Load more posts")
  }

  return (
    <RecentPosts posts={mockPosts} onLoadMore={handleLoadMore} hasMore={true} />
  )
}
