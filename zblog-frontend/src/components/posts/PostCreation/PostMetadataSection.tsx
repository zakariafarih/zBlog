"use client";
import React from "react";
import CoverImageUploader from "./CoverImageUploader";
import TagInput from "../PostDetail/TagInput";

interface PostMetadataSectionProps {
  title: string;
  onTitleChange: (val: string) => void;
  tags: string[];
  onTagsChange: (val: string[]) => void;

  // Renamed props for cover image
  coverImageUrl: string;
  onCoverImageUrlChange: (url: string) => void;
  coverImageKey: string;
  onCoverImageKeyChange: (key: string) => void;
}

export default function PostMetadataSection({
  title,
  onTitleChange,
  tags,
  onTagsChange,
  coverImageUrl,
  onCoverImageUrlChange,
  coverImageKey,
  onCoverImageKeyChange,
}: PostMetadataSectionProps) {
  return (
    <div className="p-4 border-b border-slate-700">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex-1 space-y-4">
          <input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="w-full p-2 text-xl font-bold bg-slate-800 border border-slate-700 rounded focus:outline-none focus:border-teal-500"
          />
          <TagInput tags={tags} onChange={onTagsChange} />
        </div>
        <div className="w-full lg:w-1/3">
          <CoverImageUploader
            coverImageUrl={coverImageUrl}
            onCoverImageUrlChange={onCoverImageUrlChange}
            coverImageKey={coverImageKey}
            onCoverImageKeyChange={onCoverImageKeyChange}
          />
        </div>
      </div>
    </div>
  );
}
