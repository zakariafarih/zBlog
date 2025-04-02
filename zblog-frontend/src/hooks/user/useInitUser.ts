import { useState } from 'react';
import { initUser, InitUserRequest, InitUserResponse } from '@/services/userService';

interface UseInitUser {
  init: (payload: InitUserRequest, secret: string, token?: string) => Promise<InitUserResponse | undefined>;
  loading: boolean;
  error: string | null;
}

export function useInitUser(): UseInitUser {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function init(
    payload: InitUserRequest,
    secret: string,
    token?: string
  ): Promise<InitUserResponse | undefined> {
    try {
      setLoading(true);
      setError(null);
      const response = await initUser(payload, secret, token);
      return response;
    } catch (err: any) {
      setError(err.message || 'Failed to init user');
      return undefined;
    } finally {
      setLoading(false);
    }
  }

  return { init, loading, error };
}
