"use client";

import React from "react";

/**
 * TopUtilityBar
 * A sticky header showing:
 * - A link "Back to Dashboard"
 * - An auto-save indicator
 * - Preview button
 * - Publish button
 */
interface TopUtilityBarProps {
  autoSaveStatus: string;
  onPreview: () => void;
  onPublish: () => void;
}

const TopUtilityBar: React.FC<TopUtilityBarProps> = ({
  autoSaveStatus,
  onPreview,
  onPublish
}) => {
  return (
    <div className="sticky top-0 z-50 flex items-center justify-between p-3 bg-slate-700 border-slate-900 shadow-md">
      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-400">{autoSaveStatus}</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onPreview}
          className="px-3 py-1 bg-slate-700 rounded hover:bg-slate-600 transition"
        >
          Preview Post
        </button>
        <button
          onClick={onPublish}
          className="px-4 py-1 bg-teal-500 rounded hover:bg-teal-400 transition font-bold"
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default TopUtilityBar;
