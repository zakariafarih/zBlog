"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "react-oidc-context";
import DOMPurify from "dompurify";
import { getPost, PostDTO } from "@/services/postService";
import PostDetail from "@/components/posts/PostDetail/PostDetail";
import Fallback from "@/components/Fallback/Fallback";
import ErrorBoundary from "@/components/Fallback/ErrorBoundary";

export default function SinglePostPage() {
  const params = useParams();
  const auth = useAuth();
  const postId =
    typeof params?.id === "string"
      ? params.id
      : Array.isArray(params?.id)
      ? params.id[0]
      : "";

  const [post, setPost] = useState<PostDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!auth.isLoading && auth.user) {
      const token = auth.user.access_token;
      getPost(postId, token)
        .then((data) => {
          setPost(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message || "Error loading post");
          setLoading(false);
        });
    }
  }, [postId, auth]);

  if (auth.isLoading || loading) {
    return <Fallback message="Loading post..." />;
  }

  if (error) {
    return <Fallback message={`Error: ${error}`} />;
  }

  if (!post) {
    return <Fallback message="No post found." />;
  }

  // Sanitize HTML content
  const safeContent = DOMPurify.sanitize(post.content);

  return (
    <ErrorBoundary fallback={<Fallback message="Something went wrong while rendering the post." />}>
      <PostDetail
        post={{
          title: post.title,
          coverImageUrl: post.bannerImageUrl || "/default-cover.jpg",
          content: safeContent,
          tags: post.tags || [],
          publishedAt: post.createdAt ? new Date(post.createdAt) : new Date(),
          author: {
            name: post.authorId ? `User ${post.authorId.substring(0, 6)}` : "Unknown Author",
            avatarUrl: "/avatars/default.png",
          },
        }}
      />
    </ErrorBoundary>
  );
}
