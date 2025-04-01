"use client";

import React from "react";
import type { PostCardProps } from "@/components/posts/PostCard";
import nextDynamic from "next/dynamic";

const RecentPosts = nextDynamic(
  () => import("@/components/posts/RecentPosts"),
  { ssr: false }
);

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
  // ... other mock posts
];

export default function RecentPostsPageClient() {
  const handleLoadMore = () => {
    console.log("Load more posts");
  };

  return (
    <RecentPosts posts={mockPosts} onLoadMore={handleLoadMore} hasMore={true} />
  );
}
