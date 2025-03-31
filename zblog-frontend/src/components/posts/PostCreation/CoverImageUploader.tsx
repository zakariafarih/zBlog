"use client";

import React, { useState, DragEvent } from "react";

interface CoverImageUploaderProps {
  coverImageUrl: string;
  onCoverImageUrlChange: (url: string) => void;
}

export default function CoverImageUploader({
  coverImageUrl,
  onCoverImageUrlChange,
}: CoverImageUploaderProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (file: File) => {
    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });
      if (!res.ok) {
        throw new Error("Upload failed");
      }
      const data = await res.json();
      onCoverImageUrlChange(data.url);
    } catch (err) {
      console.error("Upload error:", err);
      setError("Upload failed. Please try again.");
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className="flex flex-col gap-3">
      <div 
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="relative border-2 border-dashed border-slate-700 rounded-lg p-6 cursor-pointer hover:border-teal-500 transition-colors group"
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-xs font-medium text-slate-300">
            Cover Image
          </span>
        </div>
  
        <div className="flex flex-col items-center justify-center min-h-[100px] gap-3">
          {coverImageUrl ? (
            <img
              src={coverImageUrl}
              alt="Cover"
              className="w-full h-40 object-cover rounded-md shadow-lg"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-slate-400">
              <svg 
                className="w-8 h-8 group-hover:text-teal-500 transition-colors" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">
                Drop an image here or click to upload
              </span>
            </div>
          )}
        </div>
        
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
      </div>
  
      {uploading && (
        <div className="flex items-center justify-center text-sm text-teal-300">
          <div className="animate-spin mr-2 h-4 w-4 border-2 border-teal-500 rounded-full border-t-transparent"></div>
          Uploading...
        </div>
      )}
      {error && (
        <div className="text-sm text-red-400 text-center">{error}</div>
      )}
    </div>
  );
}
