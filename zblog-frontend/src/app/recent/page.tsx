"use client"

import React from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { explorePosts, PostDTO } from "@/services/postService"
import RecentPosts from "@/components/posts/RecentPosts"
import Fallback from "@/components/fallback/Fallback"
import NoPostsHolder from "@/components/posts/NoPostsHolder"
import { useAuth } from "react-oidc-context"

const PAGE_SIZE = 9

export interface RawPost {
  id: string
  title: string
  description: string
  author: string
  authorId?: string
  timestamp: string
  tags?: string[]
  imageUrl?: string
  reactionCount?: number
  commentCount?: number
}

export default function RecentPostsPage() {
  const auth = useAuth()
  const idToken = auth.user?.id_token

  const {
    data,
    error,
    isError,
    isLoading,
    fetchNextPage,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["recentPosts", idToken],
    queryFn: async ({ pageParam = 0 }) => {
      if (!idToken) throw new Error("Unauthorized")
      return await explorePosts("", [], "recent", pageParam, PAGE_SIZE, idToken)
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.last ? undefined : pages.length
    },
    enabled: !!idToken,
    retry: 2,
  })

  const posts: PostDTO[] = data ? data.pages.flatMap(page => page.content) : []

  const mappedPosts: RawPost[] = posts.map((post) => ({
    id: post.id || "",
    title: post.title,
    description: post.content,
    author: "User " + (post.authorId?.slice(0, 6) || "Unknown"), 
    authorId: post.authorId,
    timestamp: post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "",
    tags: post.tags || [],
    imageUrl: post.bannerImageUrl || "/default-cover.jpg",
    reactionCount: (post.likeCount || 0) + (post.heartCount || 0),
    commentCount: 0,
  }))
  

  return (
    <main className="bg-slate-900 text-white min-h-screen pt-4 pb-16 overflow-hidden">
      {isLoading && <Fallback message="Loading recent posts..." />}

      {isError && (
        <div className="flex flex-col items-center justify-center py-16">
          <p className="text-red-400 mb-4">Failed to load posts: {error?.message}</p>
          <button
            onClick={() => refetch()}
            className="bg-slate-700 hover:bg-slate-600 text-white rounded-xl py-2 px-6 font-medium transition"
          >
            Retry
          </button>
        </div>
      )}

      {!isLoading && !isError && posts.length === 0 && <NoPostsHolder />}

      {!isLoading && !isError && posts.length > 0 && (
        <RecentPosts
          posts={mappedPosts}
          onLoadMore={() => fetchNextPage()}
          hasMore={!!hasNextPage}
        />
      )}
    </main>
  )
}
