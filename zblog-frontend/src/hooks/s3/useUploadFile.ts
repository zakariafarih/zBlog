import { useState } from 'react';
import { uploadFile, S3FileMetadata } from '@/services/s3Service';

interface UseUploadFile {
  upload: (file: File, directory?: string, token?: string) => Promise<S3FileMetadata | undefined>;
  loading: boolean;
  error?: string;
}

export function useUploadFile(): UseUploadFile {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  async function upload(
    file: File,
    directory?: string,
    token?: string
  ): Promise<S3FileMetadata | undefined> {
    try {
      setLoading(true);
      setError(undefined);
      const data = await uploadFile(file, directory, token);
      return data;
    } catch (err: any) {
      setError(err.message || 'File upload failed');
      return undefined;
    } finally {
      setLoading(false);
    }
  }

  return {
    upload,
    loading,
    error,
  };
}
