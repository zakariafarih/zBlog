'use client';

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "react-oidc-context";
import DOMPurify from "dompurify";
import { getPost, PostDTO } from "@/services/postService";
import { getUserProfile } from "@/services/userService"; 
import PostDetail from "@/components/posts/PostDetail/PostDetail";
import Fallback from "@/components/fallback/Fallback";
import ErrorBoundary from "@/components/fallback/ErrorBoundary";
import { useTogglePostReaction } from "@/hooks/post/useTogglePostReaction";
import { createBookmark } from "@/services/bookmarkService";

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
  const [author, setAuthor] = useState<{ name: string; avatarUrl: string }>({
    name: "Unknown Author",
    avatarUrl: "/avatars/default.png",
  });
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
          if (data.authorId) {
            getUserProfile(data.authorId, token)
              .then((authorData) => {
                setAuthor({
                  name: authorData.username,
                  avatarUrl: authorData.profileImageUrl || "/avatars/default.png",
                });
              })
              .catch((err) => {
                console.error("Failed to load author info:", err);
                setAuthor({
                  name: `User ${(data.authorId ?? "unknown").substring(0, 6)}`,
                  avatarUrl: "/avatars/default.png",
                });
              });
          }
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

  // Sanitize post content to prevent XSS
  const safeContent = DOMPurify.sanitize(post.content);

  return (
    <ErrorBoundary fallback={<Fallback message="Something went wrong rendering the post." />}>
      <PostDetail
        post={{
          id: post.id,
          title: post.title,
          coverImageUrl: post.bannerImageUrl || "avatars/default-cover.jpg",
          content: safeContent,
          tags: post.tags || [],
          publishedAt: post.createdAt ? new Date(post.createdAt) : new Date(),
          author: {
            name: author.name,
            avatarUrl: author.avatarUrl,
          },
        }}
        onLike={async () => {
          if (auth.user && post.id) {
            // Optimistic update of likeCount
            setPost((prev) =>
              prev ? { ...prev, likeCount: (prev.likeCount ?? 0) + 1 } : prev
            );
            const reactionUpdate = await togglePostReaction(
              post.id,
              "like",
              auth.user.access_token
            );
            if (reactionUpdate) {
              setPost((prev) =>
                prev ? { ...prev, likeCount: reactionUpdate.likeCount } : prev
              );
            }
          }
        }}
        onBookmark={async () => {
          if (auth.user && post.id) {
            setPost((prev) =>
              prev ? { ...prev, bookmarkCount: (prev.bookmarkCount ?? 0) + 1 } : prev
            );
            const reactionUpdate = await togglePostReaction(
              post.id,
              "bookmark",
              auth.user.access_token
            );
            try {
              await createBookmark(post.id, auth.user.access_token);
            } catch (err) {
              console.error("Error creating bookmark record:", err);
            }
            if (reactionUpdate) {
              setPost((prev) =>
                prev ? { ...prev, bookmarkCount: reactionUpdate.bookmarkCount } : prev
              );
            }
          }
        }}
        onShare={async () => {
          navigator.clipboard.writeText(window.location.href);
          alert("Post URL copied to clipboard!");
        }}
        onCommentClick={() => {
          document
            .getElementById("comment-section")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />
    </ErrorBoundary>
  );
}
