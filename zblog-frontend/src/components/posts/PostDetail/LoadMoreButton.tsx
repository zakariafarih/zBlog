"use client";

import React from "react";

interface LoadMoreButtonProps {
  onClick: () => void;
  label?: string;
}

export default function LoadMoreButton({ onClick, label = "Load More" }: LoadMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition-colors"
    >
      {label}
    </button>
  );
}
