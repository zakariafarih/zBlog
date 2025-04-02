"use client";

import { useState } from "react";
import { createPost, PostDTO } from "@/services/postService";

/**
 * A custom hook to create a post via post-core service.
 */
export function useCreatePost() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * create: Calls the createPost() service method. 
   * Pass `authToken` (e.g. from Cognito).
   */
  async function create(post: PostDTO, authToken?: string) {
    try {
      setLoading(true);
      setError(null);

      const newPost = await createPost(post, authToken);
      return newPost;
    } catch (err: any) {
      setError(err.message || "Failed to create post");
      return null;
    } finally {
      setLoading(false);
    }
  }

  return {
    create,
    loading,
    error,
  };
}
