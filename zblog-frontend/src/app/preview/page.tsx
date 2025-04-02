"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { usePostDraft } from "@/context/PostDraftContext";
import PostDetail from "@/components/posts/PostDetail/PostDetail";

export default function PreviewPage() {
  const router = useRouter();
  const { draft } = usePostDraft();

  // Hard-coded author for preview
  const author = {
    name: "Preview Author",
    avatarUrl: "/avatars/default.png",
  };

  // Build the post object for <PostDetail />
  const post = {
    title: draft.title || "Untitled Post",
    // Use draft.coverImageUrl here for immediate preview
    coverImageUrl: draft.coverImageUrl || "/default-cover.jpg",
    content: draft.content || "<p>No content yet</p>",
    tags: draft.tags.length ? draft.tags : ["General"],
    publishedAt: new Date(),
    author,
  };

  return (
    <div className="bg-slate-700 text-white min-h-screen">
      {/* Back button */}
      <div className="p-2 border-b border-slate-600">
        <button
          onClick={() => router.push("/express")}
          className="px-4 py-2 bg-slate-900 rounded hover:bg-slate-600 transition"
        >
          Back to Editor
        </button>
      </div>

      {/* Post detail preview */}
      <PostDetail post={post} />
    </div>
  );
}
