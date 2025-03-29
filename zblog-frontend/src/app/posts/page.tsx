"use client"

import React, { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import ExplorePostsFilter, { FilterState } from "@/components/posts/ExplorePostsFilter"
import NoPostsHolder from "@/components/posts/NoPostsHolder"
import PostCard from "@/components/posts/PostCard"
import { mockPosts } from "./mockPosts"
import AnimatedHeaderPost from "@/components/posts/AnimatedHeaderPost"

export default function ExplorePostsPage() {
  const searchParams = useSearchParams()
  const initialTag = searchParams.get("tag") || ""

  const [filters, setFilters] = useState<FilterState>({
    keyword: "",
    tag: initialTag,
    dateRange: "all",
    sort: "recent",
  })

  const [filteredPosts, setFilteredPosts] = useState(mockPosts)

  useEffect(() => {
    let results = mockPosts

    if (filters.keyword) {
      results = results.filter((post) =>
        post.title.toLowerCase().includes(filters.keyword.toLowerCase()) ||
        post.description.toLowerCase().includes(filters.keyword.toLowerCase())
      )
    }

    if (filters.tag) {
      results = results.filter((post) => post.tags?.includes(filters.tag))
    }

    setFilteredPosts(results)
  }, [filters])

  return (
    <main className="bg-slate-900 text-white min-h-screen pt-4 pb-16 overflow-hidden">
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <AnimatedHeaderPost />

        {/* Filters */}
        <ExplorePostsFilter filters={filters} setFilters={setFilters} />

        {/* Posts or Empty State */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} {...post} onClick={() => {}} />
            ))}
          </div>
        ) : (
          <div className="mt-10">
            <NoPostsHolder />
          </div>
        )}
      </section>
    </main>
  )
}
