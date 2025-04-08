"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MoreVertical, Trash2 } from "lucide-react";
import ReactionButtons from "./ReactionButtons";
import ReplyButton from "./ReplyButton";
import { CommentResponseDTO, deleteComment } from "@/services/commentService";
import { useAuth } from "react-oidc-context";
import { getUserProfile } from "@/services/userService";

interface CommentItemProps {
  comment: CommentResponseDTO;
  onReply?: (commentId: string) => void;
  onDelete?: () => void;
}

export default function CommentItem({ comment, onReply, onDelete }: CommentItemProps) {
  const auth = useAuth();
  const [displayName, setDisplayName] = useState(comment.authorId);
  const [avatarUrl, setAvatarUrl] = useState("/avatars/default.png");

  const userSub = auth.user?.profile?.sub;

  useEffect(() => {
    async function resolveAuthor() {
      if (comment.authorId) {
        const token = auth.user?.access_token;
        try {
          const authorData = await getUserProfile(comment.authorId, token);
          setDisplayName(authorData.username);
          setAvatarUrl(authorData.profileImageUrl || "/avatars/default.png");
        } catch (err) {
          console.error("Error resolving author profile:", err);
          setDisplayName(`User ${comment.authorId.substring(0, 6)}`);
          setAvatarUrl("/avatars/default.png");
        }
      }
    }
    resolveAuthor();
  }, [comment.authorId, auth.user]);

  const handleDelete = async () => {
    if (userSub && comment.authorId === userSub) {
      try {
        await deleteComment(comment.id, auth.user?.access_token ?? "");
        onDelete?.();
      } catch (err) {
        console.error("Failed to delete comment", err);
      }
    } else {
      alert("You are not authorized to delete this comment.");
    }
  };

  return (
    <div className="flex items-start gap-4 py-4 border-b border-slate-700">
      <div className="relative w-10 h-10 flex-shrink-0 rounded-full overflow-hidden">
        <Image
          src={avatarUrl}
          alt={displayName}
          width={40}
          height={40}
          className="rounded-full object-cover"
          loading="eager"
          priority
          placeholder="blur"
          blurDataURL="/avatars/placeholder.png"
          onError={() => setAvatarUrl("/avatars/default.png")}
        />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="font-semibold text-white">{displayName}</span>
            <span className="text-slate-500">•</span>
            <span>{new Date(comment.createdAt).toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <MoreVertical className="w-4 h-4 text-slate-500 cursor-pointer hover:text-slate-300" />
            {userSub && comment.authorId === userSub && (
              <Trash2
                className="w-4 h-4 text-red-400 cursor-pointer hover:text-red-300"
                onClick={handleDelete}
              />
            )}
          </div>
        </div>
        <p className="text-slate-100 text-sm mb-2">{comment.content}</p>
        <div className="flex items-center justify-between text-sm text-slate-400">
          <ReplyButton commentId={comment.id} onReply={onReply} />
          <ReactionButtons comment={comment} />
        </div>
        {comment.replies && comment.replies.length > 0 && (
          <div className="ml-8 mt-4">
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} onReply={onReply} onDelete={onDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
