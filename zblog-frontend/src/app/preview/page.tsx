"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PostDetail from "@/components/posts/PostDetail/PostDetail";

export default function PreviewPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Extract data from query parameters. You may pass additional data (e.g. title, coverImageUrl, tag) from the editor.
  const title = searchParams.get("title") || "Untitled Post";
  const coverImageUrl = searchParams.get("coverImageUrl") || "/default-cover.jpg";
  const content = searchParams.get("content") || "";
  const tag = searchParams.get("tag") || "General";

  // For preview purposes, we'll use a placeholder author and current date.
  const publishedAt = new Date();
  const author = {
    name: "Preview Author",
    avatarUrl: "/avatars/default.png",
  };

  const post = {
    title,
    coverImageUrl,
    content,
    tag,
    publishedAt,
    author,
  };

  return (
    <div className="bg-slate-700 text-white min-h-screen">
      {/* Top bar with a Back button */}
      <div className="p-2 border-b border-slate-700">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-slate-900 rounded hover:bg-slate-600 transition"
        >
          Back to Editor
        </button>
      </div>

      {/* Render the post preview */}
      <PostDetail post={post} />
    </div>
  );
}
