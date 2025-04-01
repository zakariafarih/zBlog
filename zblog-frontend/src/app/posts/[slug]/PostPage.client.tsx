"use client";

import React from "react";
import { mockPost } from "./mockPost";
import nextDynamic from "next/dynamic";

const PostDetail = nextDynamic(
  () => import("@/components/posts/PostDetail/PostDetail"),
  { ssr: false }
);

export default function PostPageClient() {
  return <PostDetail post={mockPost} />;
}
