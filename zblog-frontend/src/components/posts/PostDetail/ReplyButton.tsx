"use client";

import React from "react";

interface ReplyButtonProps {
  commentId: string;
  onReply?: (commentId: string) => void;
}

export default function ReplyButton({ commentId, onReply }: ReplyButtonProps) {
  const handleReply = () => {
    if (onReply) {
      onReply(commentId);
    }
  };

  return (
    <button onClick={handleReply} className="hover:underline text-sm text-blue-400">
      Reply
    </button>
  );
}
