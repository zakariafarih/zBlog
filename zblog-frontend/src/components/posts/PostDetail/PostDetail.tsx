"use client";

import React from "react";
import PostHeader from "./PostHeader";
import PostReactionPanel from "./PostReactionPanel";
import CommentSection from "./CommentSection";

interface PostDetailProps {
  post: {
    title: string;
    coverImageUrl: string;
    author: {
      name: string;
      avatarUrl: string;
    };
    publishedAt: Date;
    tags: string[];
    content: string;
  };
}

export default function PostDetail({ post }: PostDetailProps) {
  return (
    <main className="bg-slate-900 text-white min-h-screen pt-6 pb-20">
      <section className="max-w-6xl mx-auto px-4 md:px-8 flex gap-10">
        {/* Left Sticky Reaction Panel */}
        <div className="hidden lg:block">
          <PostReactionPanel />
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header (Banner, Title, Meta) */}
          <PostHeader
            title={post.title}
            coverImageUrl={post.coverImageUrl}
            author={post.author}
            publishedAt={post.publishedAt}
            tags={post.tags}
          />

          {/* Body Content rendered as HTML */}
          <article
            className="text-slate-300 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Comment Section */}
          <CommentSection />
        </div>
      </section>
    </main>
  );
}
