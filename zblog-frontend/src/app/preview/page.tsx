"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DOMPurify from "dompurify";
import PostDetail from "@/components/posts/PostDetail/PostDetail";

export default function PreviewPage() {
  const router = useRouter();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("post_preview");
    if (stored) {
      const parsed = JSON.parse(stored);
      // Sanitize the content for safe HTML rendering.
      parsed.content = DOMPurify.sanitize(parsed.content);
      setPost(parsed);
    }
  }, []);

  if (!post) {
    return <div className="p-4">Loading preview...</div>;
  }

  console.log(post);

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      {/* Back button */}
      <div className="p-4 border-b border-slate-800">
        <button
          onClick={() => router.push("/express")}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded text-white transition"
        >
          ← Back to Editor
        </button>
      </div>
      <PostDetail post={post} />
    </div>
  );
}
