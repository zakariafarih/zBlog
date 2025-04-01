"use client";
export const dynamic = "force-dynamic";

import React, { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import nextDynamic from "next/dynamic"

const PostDetail = nextDynamic(() => import("@/components/posts/PostDetail/PostDetail"), { ssr: false })

function PreviewContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Extract data from query parameters
  const title = searchParams.get("title") || "Untitled Post";
  const coverImageUrl = searchParams.get("coverImageUrl") || "/default-cover.jpg";
  const content = searchParams.get("content") || "";
  const tag = searchParams.get("tag") || "General";

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
      <div className="p-2 border-b border-slate-700">
        <button
          onClick={() => router.back()}
          className="px-4 py-2 bg-slate-900 rounded hover:bg-slate-600 transition"
        >
          Back to Editor
        </button>
      </div>
      <PostDetail post={post} />
    </div>
  );
}

export default function PreviewPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PreviewContent />
    </Suspense>
  );
}