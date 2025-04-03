"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import NoPostsHolder from "@/components/posts/NoPostsHolder";
import PostCard from "@/components/posts/PostCard";
import AnimatedHeaderPost from "@/components/posts/AnimatedHeaderPost";
import { useAuth } from "react-oidc-context";
import { explorePosts, PostDTO } from "@/services/postService";
import { FilterState } from "@/types/filters";

const ExplorePostsFilter = dynamic(
  () => import("@/components/posts/ExplorePostsFilter.client"),
  { ssr: false }
);

export default function ExplorePostsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialTag = searchParams.get("tag") || "";
  const auth = useAuth();

  const [filters, setFilters] = useState<FilterState>({
    keyword: "",
    tag: initialTag,
    sort: "recent",
    dateRange: "all",
  });

  const [posts, setPosts] = useState<PostDTO[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const token = auth.user?.access_token;
      const page = 0;
      const size = 30;
      const tagList = filters.tag ? [filters.tag] : [];
      const dataPage = await explorePosts(filters.keyword, tagList, filters.sort, page, size, token);
      setPosts(dataPage.content || []);
    };

    if (auth.user) {
      fetchPosts();
    }
  }, [filters, auth.user]);

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8">
      <AnimatedHeaderPost />
      <ExplorePostsFilter filters={filters} setFilters={setFilters} />
      {posts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id!}
              title={post.title}
              description={post.content}
              author={post.authorId ? `User ${post.authorId.substring(0, 6)}` : "Unknown Author"}
              timestamp={post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ""}
              tags={post.tags || []}
              imageUrl={post.bannerImageUrl || "/default-cover.jpg"}
              reactionCount={(post.likeCount || 0) + (post.heartCount || 0)}
              commentCount={0}
              onClick={() => router.push(`/posts/${post.id}`)}
            />
          ))}
        </div>
      ) : (
        <div className="mt-10">
          <NoPostsHolder />
        </div>
      )}
    </section>
  );
}
