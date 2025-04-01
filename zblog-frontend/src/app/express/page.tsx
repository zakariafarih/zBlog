"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "react-oidc-context";

import TopUtilityBar from "@/components/posts/PostCreation/TopUtilityBar";
import PostMetadataSection from "@/components/posts/PostCreation/PostMetadataSection";
import EditorComponent from "@/components/posts/PostCreation/EditorComponent";
import BottomToolbar from "@/components/posts/PostCreation/BottomToolbar";

const CreatePostPage: React.FC = () => {
  const auth = useAuth();
  const router = useRouter();

  // Post metadata
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  // Removed post type since all posts are same type now.
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

      {/* Main Editor Area - full width (no extra max-width limiting container) */}
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
