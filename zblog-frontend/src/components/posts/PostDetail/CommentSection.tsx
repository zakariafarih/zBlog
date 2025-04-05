"use client";

import React from "react";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import { useComments } from "@/hooks/comment/useComments";

interface CommentSectionProps {
  postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  // Get the refetch function from the useComments hook so that we can refresh the comment list
  const { refetch } = useComments(postId);

  return (
    <section id="comment-section" className="mt-10">
      <h2 className="text-xl font-semibold mb-1">Comments</h2>
      <CommentForm postId={postId} onSuccess={(newComment) => console.log(newComment)} onCommentCreated={refetch} />
      <CommentList postId={postId} onDelete={refetch} />
    </section>
  );
}
