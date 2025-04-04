"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "react-oidc-context";
import DOMPurify from "dompurify";
import { getPost, PostDTO } from "@/services/postService";
import PostDetail from "@/components/posts/PostDetail/PostDetail";
import Fallback from "@/components/Fallback/Fallback";
import ErrorBoundary from "@/components/Fallback/ErrorBoundary";
import { useTogglePostReaction } from "@/hooks/post/useTogglePostReaction";

export default function SinglePostPage() {
  const params = useParams();
  const auth = useAuth();
  const postIdParam =
    typeof params?.id === "string"
      ? params.id
      : Array.isArray(params?.id)
      ? params.id[0]
      : "";

  const [post, setPost] = useState<PostDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toggle: togglePostReaction } = useTogglePostReaction();

  useEffect(() => {
    if (!auth.isLoading && auth.user) {
      const token = auth.user.access_token;
      getPost(postIdParam, token)
        .then((data) => {
          if (!data.id) {
            throw new Error("Post ID is missing in response");
          }
          setPost(data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message || "Error loading post");
          setLoading(false);
        });
    }
  }, [postIdParam, auth]);

  if (auth.isLoading || loading) {
    return <Fallback message="Loading post..." />;
  }

  if (error) {
    return <Fallback message={`Error: ${error}`} />;
  }

  if (!post || !post.id) {
    return <Fallback message="No post found." />;
  }

  const safeContent = DOMPurify.sanitize(post.content);

  const handleLike = async () => {
    if (auth.user && post.id) {
      const updatedPost = await togglePostReaction(
        post.id,
        "like",
        auth.user.access_token
      );
      if (updatedPost) {
        setPost(updatedPost);
      }
    }
  };

  const handleBookmark = async () => {
    if (auth.user && post.id) {
      const updatedPost = await togglePostReaction(
        post.id,
        "bookmark",
        auth.user.access_token
      );
      if (updatedPost) {
        setPost(updatedPost);
      }
    }
  };

  const handleShare = async () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Post URL copied to clipboard!");
  };

  const handleCommentClick = () => {
    document
      .getElementById("comment-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ErrorBoundary fallback={<Fallback message="Something went wrong rendering the post." />}>
      <PostDetail
        post={{
          id: post.id,
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
        onLike={handleLike}
        onBookmark={handleBookmark}
        onShare={handleShare}
        onCommentClick={handleCommentClick}
      />
    </ErrorBoundary>
  );
}
