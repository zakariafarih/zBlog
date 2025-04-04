"use client";

import React from "react";
import { ThumbsUp, Smile, Frown, Lightbulb } from "lucide-react";
import { CommentResponseDTO } from "@/services/commentService";
import { useToggleCommentReaction } from "@/hooks/comment/useToggleCommentReaction";
import { useAuth } from "react-oidc-context";

interface ReactionButtonsProps {
  comment: CommentResponseDTO;
}

export default function ReactionButtons({ comment }: ReactionButtonsProps) {
  const auth = useAuth();
  const { toggle } = useToggleCommentReaction();

  const handleReaction = async (reactionType: string) => {
    if (!auth.user) return;
    await toggle(comment.id, reactionType, auth.user.access_token);
    // Optionally, trigger a refresh or update local state here.
  };

  return (
    <div className="flex items-center gap-4">
      <button onClick={() => handleReaction("like")} className="flex items-center gap-1 text-sm hover:underline">
        <ThumbsUp size={16} /> {comment.likeCount}
      </button>
      <button onClick={() => handleReaction("laugh")} className="flex items-center gap-1 text-sm hover:underline">
        <Smile size={16} /> {comment.laughCount}
      </button>
      <button onClick={() => handleReaction("sad")} className="flex items-center gap-1 text-sm hover:underline">
        <Frown size={16} /> {comment.sadCount}
      </button>
      <button onClick={() => handleReaction("insightful")} className="flex items-center gap-1 text-sm hover:underline">
        <Lightbulb size={16} /> {comment.insightfulCount}
      </button>
    </div>
  );
}
