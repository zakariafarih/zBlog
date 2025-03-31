"use client";

import React from "react";

interface BottomToolbarProps {
  content: string;
  readingTime: string;
  onDiscard: () => void;
}

const BottomToolbar: React.FC<BottomToolbarProps> = ({
  content,
  readingTime,
  onDiscard,
}) => {
  // Compute word count simply by splitting on whitespace
  const wordCount =
    content.trim() === "" ? 0 : content.trim().split(/\s+/).length;
    
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-800 p-3 flex justify-between items-center text-sm text-slate-400">
      <div>
        <span>Word Count: {wordCount}</span>
        <span className="ml-4">Read Time: {readingTime}</span>
      </div>
      <div>
        <button
          onClick={onDiscard}
          className="hover:underline text-red-400"
        >
          Discard Changes
        </button>
      </div>
    </div>
  );
};

export default BottomToolbar;
