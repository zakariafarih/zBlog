"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface PostDraft {
  title: string;
  tags: string[];
  coverImageUrl: string;  // ephemeral or public URL for immediate preview
  coverImageKey: string;  // the S3 key stored for back-end (bannerImageKey)
  content: string;
}

interface PostDraftContextValue {
  draft: PostDraft;
  setDraft: React.Dispatch<React.SetStateAction<PostDraft>>;
  resetDraft: () => void;
}

const defaultDraft: PostDraft = {
  title: "",
  tags: [],
  coverImageUrl: "",
  coverImageKey: "",
  content: "",
};

const PostDraftContext = createContext<PostDraftContextValue | undefined>(undefined);

export function PostDraftProvider({ children }: { children: ReactNode }) {
  const [draft, setDraft] = useState<PostDraft>(defaultDraft);

  function resetDraft() {
    setDraft(defaultDraft);
  }

  return (
    <PostDraftContext.Provider value={{ draft, setDraft, resetDraft }}>
      {children}
    </PostDraftContext.Provider>
  );
}

export function usePostDraft() {
  const context = useContext(PostDraftContext);
  if (!context) {
    throw new Error("usePostDraft must be used within a PostDraftProvider");
  }
  return context;
}
