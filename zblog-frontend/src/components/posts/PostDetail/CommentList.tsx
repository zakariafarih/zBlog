"use client";

import React from "react";
import { useComments } from "@/hooks/comment/useComments";
import CommentItem from "./CommentItem";
import LoadMoreButton from "./LoadMoreButton";

interface CommentListProps {
  postId: string;
}

export default function CommentList({ postId }: CommentListProps) {
  const { comments, hasNextPage, fetchNextPage, isLoading } = useComments(postId);

  if (isLoading) {
    return <div>Loading comments...</div>;
  }

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
      {hasNextPage && (
        <LoadMoreButton onClick={fetchNextPage} label="Load More Comments" />
      )}
    </div>
  );
}
