"use client";

import React from "react";
import { useComments } from "@/hooks/comment/useComments";
import CommentItem from "./CommentItem";
import LoadMoreButton from "./LoadMoreButton";

interface CommentListProps {
  postId: string;
  onDelete: () => void;
  onReply?: (commentId: string) => void;
}

export default function CommentList({ postId, onDelete, onReply }: CommentListProps) {
  const { comments, hasNextPage, fetchNextPage, isLoading } = useComments(postId);

  if (isLoading) {
    return <div>Loading comments...</div>;
  }

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} onReply={onReply} onDelete={onDelete} />
      ))}
      {hasNextPage && (
        <LoadMoreButton onClick={fetchNextPage} label="Load More Comments" />
      )}
    </div>
  );
}
