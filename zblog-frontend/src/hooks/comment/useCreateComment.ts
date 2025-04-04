import { useState } from 'react';
import { useAuth } from 'react-oidc-context';
import {
  createComment,
  CommentCreateRequest,
  CommentResponseDTO,
} from '@/services/commentService';
import { getAuthorName } from '@/services/authorCache';

interface UseCreateComment {
  create: (req: CommentCreateRequest) => Promise<CommentResponseDTO | undefined>;
  loading: boolean;
  error?: string;
}

export function useCreateComment(): UseCreateComment {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const auth = useAuth();

  async function create(
    req: CommentCreateRequest
  ): Promise<CommentResponseDTO | undefined> {
    const token = auth.user?.access_token;
    if (!token) {
      setError("You must be logged in to comment.");
      return undefined;
    }

    try {
      setLoading(true);
      setError(undefined);
      const result = await createComment(req, token);
      // Enrich the returned comment by resolving the author's display name.
      if (result.authorId) {
        const displayName = await getAuthorName(result.authorId, token);
        result.authorId = displayName;
      }
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
