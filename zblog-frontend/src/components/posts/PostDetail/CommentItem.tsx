"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";
import ReactionButtons from "./ReactionButtons";
import ReplyButton from "./ReplyButton";
import { CommentResponseDTO } from "@/services/commentService";
import { getAuthorName } from "@/services/authorCache";
import { useAuth } from "react-oidc-context";

interface CommentItemProps {
  comment: CommentResponseDTO;
  onReply?: (commentId: string) => void;
}

export default function CommentItem({ comment, onReply }: CommentItemProps) {
  const auth = useAuth();
  // Initially, we use the raw authorId; it will be replaced with the display name.
  const [displayName, setDisplayName] = useState(comment.authorId);
  const [avatarUrl, setAvatarUrl] = useState("/avatars/default.png");

  useEffect(() => {
    async function resolveAuthor() {
      if (comment.authorId) {
        const token = auth.user?.access_token;
        const name = await getAuthorName(comment.authorId, token);
        setDisplayName(name);
      }
    }
    resolveAuthor();
  }, [comment.authorId, auth.user]);

  return (
    <div className="flex items-start gap-4 py-4 border-b border-slate-700">
      <div className="w-10 h-10 flex-shrink-0 rounded-full overflow-hidden">
        <Image
          src={avatarUrl}
          alt={displayName}
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="font-semibold text-white">{displayName}</span>
            <span className="text-slate-500">•</span>
            <span>{new Date(comment.createdAt).toLocaleString()}</span>
          </div>
          <MoreVertical className="w-4 h-4 text-slate-500 cursor-pointer hover:text-slate-300" />
        </div>
        <p className="text-slate-100 text-sm mb-2">{comment.content}</p>
        <div className="flex items-center justify-between text-sm text-slate-400">
          <ReplyButton commentId={comment.id} onReply={onReply} />
          <ReactionButtons comment={comment} />
        </div>
        {comment.replies && comment.replies.length > 0 && (
          <div className="ml-8 mt-4">
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} onReply={onReply} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
