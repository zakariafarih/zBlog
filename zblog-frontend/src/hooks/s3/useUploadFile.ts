import { useState } from 'react';
import { uploadFile, S3FileMetadata } from '@/services/s3Service';

export interface UploadResult {
  previewUrl: string;
  fileKey: string;
}

interface UseUploadFile {
  upload: (file: File, directory?: string, token?: string) => Promise<UploadResult | undefined>;
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
  ): Promise<UploadResult | undefined> {
    try {
      setLoading(true);
      setError(undefined);
      const data: S3FileMetadata = await uploadFile(file, directory, token);
      // Return an object with both previewUrl and fileKey
      return { previewUrl: data.url.toString(), fileKey: data.key };
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
