"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "react-oidc-context";
import { motion } from "framer-motion";
import nextDynamic from "next/dynamic";

// Dynamically import components that rely on browser APIs
const TopUtilityBar = nextDynamic(
  () => import("@/components/posts/PostCreation/TopUtilityBar"),
  { ssr: false }
);
const PostMetadataSection = nextDynamic(
  () => import("@/components/posts/PostCreation/PostMetadataSection"),
  { ssr: false }
);
const EditorComponent = nextDynamic(
  () => import("@/components/posts/PostCreation/EditorComponent"),
  { ssr: false }
);
const BottomToolbar = nextDynamic(
  () => import("@/components/posts/PostCreation/BottomToolbar"),
  { ssr: false }
);

const CreatePostPage: React.FC = () => {
  const auth = useAuth();
  const router = useRouter();

  // Post metadata
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [coverImageUrl, setCoverImageUrl] = useState("");

  // Editor content
  const [content, setContent] = useState("");

  // Auto-save status
  const [autoSaveStatus, setAutoSaveStatus] = useState("Saved");

  const autoSave = useCallback(() => {
    setAutoSaveStatus("Saving...");
    setTimeout(() => {
      setAutoSaveStatus("Saved just now");
    }, 1000);
  }, []);

  useEffect(() => {
    const interval = setInterval(autoSave, 10000);
    return () => clearInterval(interval);
  }, [autoSave]);

  const handlePreview = () => {
    router.push("/preview?content=" + encodeURIComponent(content));
  };

  const handlePublish = async () => {
    alert("Publishing post...");
    // Implement publish logic here.
  };

  const handleDiscard = () => {
    if (typeof window !== "undefined" && window.tinymce?.activeEditor) {
      window.tinymce.activeEditor.undo();
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Top Utility Bar */}
      <TopUtilityBar
        autoSaveStatus={autoSaveStatus}
        onPreview={handlePreview}
        onPublish={handlePublish}
      />

      {/* Post Metadata Section */}
      <PostMetadataSection
        title={title}
        onTitleChange={setTitle}
        tags={tags}
        onTagsChange={setTags}
        coverImageUrl={coverImageUrl}
        onCoverImageUrlChange={setCoverImageUrl}
      />

      {/* Main Editor Area */}
      <div className="p-4">
        <EditorComponent content={content} onContentChange={setContent} />
      </div>

      {/* Bottom Toolbar */}
      <BottomToolbar
        content={content}
        readingTime="2 min"
        onDiscard={handleDiscard}
      />
    </div>
  );
};

export default CreatePostPage;
