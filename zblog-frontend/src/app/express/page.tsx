"use client";

import React, { useEffect, useCallback, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useAuth } from "react-oidc-context";

import { useCreatePost } from "@/hooks/post/useCreatePost";
import { usePostDraft } from "@/context/PostDraftContext";

import TopUtilityBar from "@/components/posts/PostCreation/TopUtilityBar";
import PostMetadataSection from "@/components/posts/PostCreation/PostMetadataSection";
import EditorComponent from "@/components/posts/PostCreation/EditorComponent";
import BottomToolbar from "@/components/posts/PostCreation/BottomToolbar";
import { PostDTO } from "@/services/postService";

// Keys for localStorage
const LOCALSTORAGE_DRAFT_KEY = "zblog_express_draft_v1";
const DISCARD_FLAG_KEY = "zblog_express_discarded";

const CreatePostPage: React.FC = () => {
  const auth = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const { create, loading: creatingPost, error: createPostError } = useCreatePost();
  const { draft, setDraft, resetDraft } = usePostDraft();

  const [autoSaveStatus, setAutoSaveStatus] = useState("Saved");
  const [showDraftModal, setShowDraftModal] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [draftVersion, setDraftVersion] = useState(0);

  // Utility: Check if a draft is empty.
  const isDraftEmpty = (d: any) => {
    return !d.title && !d.content && !d.coverImageUrl && (!d.tags || d.tags.length === 0);
  };

  // Utility: Clear all draft data.
  const clearAllDraftData = useCallback(() => {
    localStorage.removeItem(LOCALSTORAGE_DRAFT_KEY);
    localStorage.removeItem(DISCARD_FLAG_KEY);
    resetDraft();
    setHasChanges(false);
    setDraftVersion((v) => v + 1);
    setAutoSaveStatus("No changes");
  }, [resetDraft]);

  // 1) On mount, check if a draft exists or was marked as discarded.
  useEffect(() => {
    const discarded = localStorage.getItem(DISCARD_FLAG_KEY);
    if (discarded) {
      clearAllDraftData();
      return;
    }
    const saved = localStorage.getItem(LOCALSTORAGE_DRAFT_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!isDraftEmpty(parsed)) {
          setShowDraftModal(true);
        }
      } catch (err) {
        console.error("Failed to parse stored draft:", err);
        localStorage.removeItem(LOCALSTORAGE_DRAFT_KEY);
      }
    }
  }, [clearAllDraftData]);

  // 2) If user chooses to resume the draft.
  const handleResumeDraft = () => {
    const saved = localStorage.getItem(LOCALSTORAGE_DRAFT_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setDraft(parsed);
        setHasChanges(true);
      } catch (err) {
        console.error("Error resuming draft:", err);
        clearAllDraftData();
      }
    }
    setShowDraftModal(false);
  };

  // 3) If user discards the local draft from the modal.
  const handleDiscardLocalDraft = () => {
    clearAllDraftData();
    setShowDraftModal(false);
  };

  // 4) Auto-save the draft every 10 seconds.
  const autoSave = useCallback(() => {
    setAutoSaveStatus("Saving...");
    localStorage.setItem(LOCALSTORAGE_DRAFT_KEY, JSON.stringify(draft));
    setTimeout(() => {
      setAutoSaveStatus("Saved just now");
    }, 800);
  }, [draft]);

  useEffect(() => {
    const interval = setInterval(autoSave, 10000);
    return () => clearInterval(interval);
  }, [autoSave]);

  // 5) Detect route changes (using native popstate event)
  useEffect(() => {
    const handlePopState = () => {
      if (hasChanges && !isDraftEmpty(draft)) {
        const shouldLeave = window.confirm(
          "You have unsaved changes. Are you sure you want to leave?"
        );
        if (!shouldLeave) {
          // Prevent navigation by pushing the current pathname back
          window.history.pushState(null, "", pathname);
          return false;
        }
        clearAllDraftData();
      }
      return true;
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [hasChanges, draft, pathname, clearAllDraftData]);

  // 6) Also add beforeunload handler for browser refresh/close.
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (hasChanges && !isDraftEmpty(draft)) {
        e.preventDefault();
        e.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, [hasChanges, draft]);

  // 7) Preview: Auto-save then navigate to preview.
  const handlePreview = () => {
    autoSave();
    router.push("/preview");
  };

  // 8) Publish the post.
  const handlePublish = async () => {
    if (!draft.title || !draft.content) {
      alert("Title and content are required!");
      return;
    }
    // IMPORTANT: Use bannerImageFileId property (not bannerImageKey)
    const postPayload: PostDTO = {
      title: draft.title,
      content: draft.content,
      tags: draft.tags,
      published: true,
      authorId: auth.user?.profile.sub ?? "",
      bannerImageFileId: draft.coverImageKey, // assuming your draft uses coverImageKey to store the S3 key
    };

    try {
      const token = auth.user?.access_token;
      const newPost = await create(postPayload, token);
      if (newPost) {
        alert("Post published successfully!");
        clearAllDraftData();
        router.push(`/posts/${newPost.id}`);
      }
    } catch (err) {
      console.error("Create post error:", err);
    }
  };

  // 9) Discard changes from the editor.
  const handleDiscard = () => {
    if (isDraftEmpty(draft) && !hasChanges) return;
    const shouldDiscard = confirm("Discard all changes? This cannot be undone.");
    if (!shouldDiscard) return;
    localStorage.setItem(DISCARD_FLAG_KEY, "true");
    clearAllDraftData();
  };

  // Updater functions for PostDraft context that mark changes.
  const setTitle = (title: string) => {
    setDraft((prev) => ({ ...prev, title }));
    setHasChanges(true);
  };
  const setTags = (tags: string[]) => {
    setDraft((prev) => ({ ...prev, tags }));
    setHasChanges(true);
  };
  const setCoverImageUrl = (url: string) => {
    setDraft((prev) => ({ ...prev, coverImageUrl: url }));
    setHasChanges(true);
  };
  const setCoverImageKey = (key: string) => {
    setDraft((prev) => ({ ...prev, coverImageKey: key }));
    setHasChanges(true);
  };
  const setContent = (content: string) => {
    setDraft((prev) => ({ ...prev, content }));
    setHasChanges(true);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 relative">
      {/* Draft detection modal */}
      {showDraftModal && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 w-80 shadow-xl">
            <h2 className="text-lg font-semibold text-white mb-4">
              Resume previous draft?
            </h2>
            <p className="text-slate-300 text-sm mb-6">
              We found a local draft. Would you like to discard it or continue editing?
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleDiscardLocalDraft}
                className="px-3 py-1 rounded bg-red-600 hover:bg-red-500 text-white text-sm"
              >
                Discard
              </button>
              <button
                onClick={handleResumeDraft}
                className="px-4 py-1 rounded bg-teal-600 hover:bg-teal-500 text-white text-sm"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top Utility Bar */}
      <TopUtilityBar
        autoSaveStatus={autoSaveStatus}
        onPreview={handlePreview}
        onPublish={handlePublish}
      />

      {createPostError && (
        <div className="p-2 bg-red-800 text-red-100 text-sm">
          Error creating post: {createPostError}
        </div>
      )}

      {creatingPost && (
        <div className="p-2 text-teal-400 text-sm">
          Publishing post, please wait...
        </div>
      )}

      {/* Metadata & Editor */}
      <PostMetadataSection
        title={draft.title}
        onTitleChange={setTitle}
        tags={draft.tags}
        onTagsChange={setTags}
        coverImageUrl={draft.coverImageUrl}
        onCoverImageUrlChange={setCoverImageUrl}
        coverImageKey={draft.coverImageKey}
        onCoverImageKeyChange={setCoverImageKey}
      />

      <div className="p-4">
        <EditorComponent key={draftVersion} content={draft.content} onContentChange={setContent} />
      </div>

      {/* Bottom Toolbar */}
      <BottomToolbar
        content={draft.content}
        readingTime="2 min"
        onDiscard={handleDiscard}
      />
    </div>
  );
};

export default CreatePostPage;
