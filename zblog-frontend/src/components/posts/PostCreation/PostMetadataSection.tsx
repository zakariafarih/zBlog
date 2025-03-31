"use client";

import React from "react";
import CoverImageUploader from "./CoverImageUploader";

interface PostMetadataSectionProps {
  title: string;
  onTitleChange: (val: string) => void;
  tags: string[];
  onTagsChange: (val: string[]) => void;
  coverImageUrl: string;
  onCoverImageUrlChange: (val: string) => void;
}

export default function PostMetadataSection({
  title,
  onTitleChange,
  tags,
  onTagsChange,
  coverImageUrl,
  onCoverImageUrlChange,
}: PostMetadataSectionProps) {
  const handleTagInput = (value: string) => {
    const splitTags = value.split(",").map((t) => t.trim());
    onTagsChange(splitTags);
  };

  return (
    <div className="p-4 border-b border-slate-700">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Left: Title and Tags */}
        <div className="flex-1 space-y-4">
          <input
            type="text"
            placeholder="Post Title"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="w-full p-2 text-xl font-bold bg-slate-800 border border-slate-700 rounded focus:outline-none focus:border-teal-500"
          />
          <input
            type="text"
            placeholder="Tags (comma separated)"
            value={tags.join(", ")}
            onChange={(e) => handleTagInput(e.target.value)}
            className="w-full p-2 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:border-teal-500"
          />
        </div>

        {/* Right: Cover Image Uploader */}
        <div className="w-full lg:w-1/3">
          <CoverImageUploader
            coverImageUrl={coverImageUrl}
            onCoverImageUrlChange={onCoverImageUrlChange}
          />
        </div>
      </div>
    </div>
  );
}
