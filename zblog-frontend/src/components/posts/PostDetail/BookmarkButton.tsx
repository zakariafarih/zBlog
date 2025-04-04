"use client";

import React, { useState } from "react";
import { Bookmark } from "lucide-react";
import { createBookmark, removeBookmark } from "@/services/userService";
import { useAuth } from "react-oidc-context";

interface BookmarkButtonProps {
  postId: string;
  initialBookmarked?: boolean;
}

export default function BookmarkButton({ postId, initialBookmarked = false }: BookmarkButtonProps) {
  const [bookmarked, setBookmarked] = useState(initialBookmarked);
  const auth = useAuth();

  const handleToggle = async () => {
    const token = auth.user?.access_token;
    if (!token) return;
    if (bookmarked) {
      await removeBookmark(postId, token);
      setBookmarked(false);
    } else {
      await createBookmark(postId, token);
      setBookmarked(true);
    }
  };

  return (
    <button onClick={handleToggle} className="p-2 rounded hover:bg-slate-700 transition">
      <Bookmark className={`w-6 h-6 ${bookmarked ? "text-blue-500" : "text-slate-400"}`} />
    </button>
  );
}
