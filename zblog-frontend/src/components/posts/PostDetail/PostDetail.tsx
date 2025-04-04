"use client";

import React from "react";
import PostHeader from "./PostHeader";
import PostReactionPanel from "./PostReactionPanel";
import CommentSection from "./CommentSection";

interface PostDetailProps {
  post: {
    id: string;
    title: string;
    coverImageUrl: string;
    author: { name: string; avatarUrl: string };
    publishedAt: Date;
    tags: string[];
    content: string;
  };
  onLike?: () => void;
  onBookmark?: () => void;
  onShare?: () => void;
  onCommentClick?: () => void;
}

export default function PostDetail({
  post,
  onLike,
  onBookmark,
  onShare,
  onCommentClick,
}: PostDetailProps) {
  return (
    <main className="bg-slate-900 text-white min-h-screen pt-6 pb-20">
      <section className="max-w-6xl mx-auto px-4 md:px-8 flex gap-10">
        <div className="hidden lg:block">
          <PostReactionPanel
            onLike={onLike}
            onBookmark={onBookmark}
            onShare={onShare}
            onCommentClick={onCommentClick}
          />
        </div>
        <div className="flex-1">
          <PostHeader
            title={post.title}
            coverImageUrl={post.coverImageUrl}
            author={post.author}
            publishedAt={post.publishedAt}
            tags={post.tags}
          />
          <article
            className="text-slate-300 leading-relaxed space-y-6"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <CommentSection postId={post.id!} />
        </div>
      </section>
    </main>
  );
}
