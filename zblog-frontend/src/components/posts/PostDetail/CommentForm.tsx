"use client";

import React, { useState, useRef, useEffect } from "react";
import { useCreateComment } from "@/hooks/comment/useCreateComment";
import { CommentResponseDTO, CommentCreateRequest } from "@/services/commentService";

interface CommentFormProps {
  postId: string;
  parentId?: string;
  onSuccess: (newComment: CommentResponseDTO) => void;
  onCommentCreated: () => void;
}

export default function CommentForm({ postId, parentId, onSuccess, onCommentCreated }: CommentFormProps) {
  const [content, setContent] = useState("");
  const { create, loading, error } = useCreateComment();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async () => {
    if (!content.trim()) return;
    const req: CommentCreateRequest = { postId, parentId, content };
    const newComment = await create(req);
    if (newComment) {
      onSuccess(newComment);
      onCommentCreated();
      setContent("");
    }
  };

  return (
    <div className="flex items-center gap-3 mt-4">
      <input
        ref={inputRef}
        type="text"
        placeholder="Write a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="flex-1 bg-slate-800 border border-slate-700 rounded px-3 py-2 text-white focus:outline-none"
      />
      <button onClick={handleSubmit} disabled={loading} className="text-sm text-blue-500 font-medium hover:underline">
        Post
      </button>
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
}
