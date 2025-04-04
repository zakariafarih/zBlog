"use client";

import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  return (
    <section id="comment-section" className="mt-10">
      <h2 className="text-xl font-semibold mb-1">Comments</h2>
      <CommentForm postId={postId} onSuccess={(newComment) => console.log(newComment)} />
      <CommentList postId={postId} />
    </section>
  );
}
