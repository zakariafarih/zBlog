"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "react-oidc-context";

import TopUtilityBar from "@/components/posts/PostCreation/TopUtilityBar";
import PostMetadataSection from "@/components/posts/PostCreation/PostMetadataSection";
import EditorComponent from "@/components/posts/PostCreation/EditorComponent";
import BottomToolbar from "@/components/posts/PostCreation/BottomToolbar";
import { PostDTO } from "@/services/postService";
import { useDraftManager } from "@/hooks/drafts/useDraftManager";
import { useCreatePost } from "@/hooks/post/useCreatePost";

const CreatePostPage: React.FC = () => {
  const auth = useAuth();
  const router = useRouter();

  const {
    draft,
    setDraftField,
    hasChanges,
    autoSaveStatus,
    showResumeModal,
    handleResumeDraft,
    handleDiscardLocalDraft,
    handleDiscardFromEditor,
    clearDraft,
  } = useDraftManager({
    userId: auth.user?.profile?.sub,
    contentType: "express",
  });

  const { create, loading: creatingPost, error: createPostError } = useCreatePost();

  async function handlePublish() {
    if (!draft.title || !draft.content) {
      alert("Title and content are required!");
      return;
    }
    const postPayload: PostDTO = {
      title: draft.title,
      content: draft.content,
      tags: draft.tags,
      published: true,
      authorId: auth.user?.profile?.sub ?? "",
      bannerImageKey: draft.coverImageKey,
    };
    try {
      const token = auth.user?.access_token;
      const newPost = await create(postPayload, token);
      if (newPost) {
        alert("Post published successfully!");
        clearDraft();
        router.push(`/posts/${newPost.id}`);
      }
    } catch (err) {
      console.error("Create post error:", err);
    }
  }

  function handlePreview() {
    const previewPost = {
      title: draft.title?.trim() || "Untitled Post",
      bannerImageUrl: draft.coverImageUrl?.trim() || "/default-cover.jpg",
      coverImageUrl: draft.coverImageUrl?.trim() || "/default-cover.jpg",
      content: draft.content,
      tags: draft.tags.length ? draft.tags : ["General"],
      publishedAt: new Date(),
      author: {
        name: "Preview Author",
        avatarUrl: "/avatars/default.png",
      },
      bannerImageKey: draft.coverImageKey,
    };
  
    localStorage.setItem("post_preview", JSON.stringify(previewPost));
    router.push("/preview");
  }  

  function setTitle(title: string) {
    setDraftField("title", title);
  }
  function setTags(tags: string[]) {
    setDraftField("tags", tags);
  }
  function setCoverImageUrl(url: string) {
    setDraftField("coverImageUrl", url);
  }
  function setCoverImageKey(key: string) {
    setDraftField("coverImageKey", key);
  }
  function setContent(content: string) {
    setDraftField("content", content);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 relative">
      {showResumeModal && (
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 w-80 shadow-xl">
            <h2 className="text-lg font-semibold text-white mb-4">
              Resume previous draft?
            </h2>
            <p className="text-slate-300 text-sm mb-6">
              We found a local draft from a previous session. Continue editing or discard?
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
        <EditorComponent content={draft.content} onContentChange={setContent} />
      </div>

      <BottomToolbar
        content={draft.content}
        readingTime="2 min"
        onDiscard={handleDiscardFromEditor}
      />
    </div>
  );
};

export default CreatePostPage;
