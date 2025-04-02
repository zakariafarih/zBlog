import { useState } from 'react';
import {
  createComment,
  CommentCreateRequest,
  CommentResponseDTO,
} from '@/services/commentService';

interface UseCreateComment {
  create: (req: CommentCreateRequest, token?: string) => Promise<CommentResponseDTO | undefined>;
  loading: boolean;
  error?: string;
}

export function useCreateComment(): UseCreateComment {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  async function create(
    req: CommentCreateRequest,
    token?: string
  ): Promise<CommentResponseDTO | undefined> {
    try {
      setLoading(true);
      setError(undefined);
      const result = await createComment(req, token);
      return result;
    } catch (err: any) {
      setError(err.message || 'Error creating comment');
      return undefined;
    } finally {
      setLoading(false);
    }
  }

  return { create, loading, error };
}
