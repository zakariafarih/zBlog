"use client";

import React, { useState, KeyboardEvent } from "react";

interface TagInputProps {
  tags: string[];
  onChange: (tags: string[]) => void;
}

/**
 * Renders a row of chips for each tag.
 * On Enter or Comma, we add a new tag.
 * On chip 'x' click, remove that tag.
 */
export default function TagInput({ tags, onChange }: TagInputProps) {
  const [inputValue, setInputValue] = useState("");

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const newTag = inputValue.trim();
      if (newTag && !tags.includes(newTag)) {
        onChange([...tags, newTag]);
      }
      setInputValue("");
    }
  }

  function removeTag(tag: string) {
    onChange(tags.filter((t) => t !== tag));
  }

  return (
    <div className="flex flex-col gap-2">
      {/* Tag Chips */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <div
            key={tag}
            className="flex items-center bg-teal-600 text-white px-2 py-1 rounded-full text-sm"
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="ml-2 text-white hover:text-gray-200"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      {/* Input for new tag */}
      <input
        type="text"
        className="w-full p-2 bg-slate-800 border border-slate-700 rounded focus:outline-none focus:border-teal-500"
        placeholder="Add tags, then press Enter..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}
