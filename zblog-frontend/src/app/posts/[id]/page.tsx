"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useAuth } from "react-oidc-context";
import { useGetPost } from "@/hooks/post/useGetPost";
import PostDetail from "@/components/posts/PostDetail/PostDetail";

export default function SinglePostPage() {
  const params = useParams(); 
  const auth = useAuth();

  const id = typeof params?.id === "string" ? params.id : Array.isArray(params?.id) ? params.id[0] : "";

  // Wait until auth is ready
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!auth.isLoading && auth.user) {
      setReady(true);
    }
  }, [auth.isLoading, auth.user]);

  const token = auth.user?.access_token;
  const { data, error, loading } = useGetPost(ready ? id : "", token);

  console.log("Auth token:", token);


  if (auth.isLoading || !ready) {
    return <div className="p-4 text-slate-300">Authenticating...</div>;
  }

  if (loading) {
    return <div className="p-4 text-slate-300">Loading post...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-400">Error: {error}</div>;
  }

  if (!data) {
    return <div className="p-4 text-slate-300">No post found.</div>;
  }

  const createdAt = data.createdAt ? new Date(data.createdAt) : new Date();

  const post = {
    title: data.title,
    coverImageUrl: data.bannerImageUrl || "/default-cover.jpg",
    content: data.content,
    tags: data.tags || [],
    publishedAt: createdAt,
    author: {
      name: "User " + data.authorId?.slice(0, 6),
      avatarUrl: "/avatars/default.png",
    },
  };

  return <PostDetail post={post} />;
}
