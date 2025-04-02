import { useEffect, useState } from 'react';
import { getPost, PostDTO } from '@/services/postService';

interface UseGetPostReturn {
  data?: PostDTO;
  error?: string;
  loading: boolean;
  refetch: () => void;
}

export function useGetPost(postId: string, authToken?: string): UseGetPostReturn {
  const [data, setData] = useState<PostDTO | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const result = await getPost(postId, authToken);
      setData(result);
      setError(undefined);
    } catch (err: any) {
      setError(err.message || 'Error fetching post');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (postId) {
      fetchPost();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postId]);

  return {
    data,
    error,
    loading,
    refetch: fetchPost,
  };
}
