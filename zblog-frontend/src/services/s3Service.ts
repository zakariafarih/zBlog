import axios, { AxiosError } from 'axios';

const s3CoreBaseURL =
  process.env.NEXT_PUBLIC_S3_CORE_URL ?? 'http://localhost:8083/s3';

// Matches Java: S3FileMetadata
export interface S3FileMetadata {
  key: string;
  size: number;
  mimeType: string;
  uploadTimestamp: string;  // Instant -> string
  url: string;              // URL -> string
}

// GET /s3/health
export async function getS3Health(): Promise<string> {
  try {
    const url = `${s3CoreBaseURL}/health`;
    const res = await axios.get<string>(url);
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

/**
 * uploadFile: POST /s3/files
 * 
 * @param file  the File/Blob
 * @param directory optional string for "directory" param (default "posts")
 * 
 * NOTE: In a browser, you’d typically need a FormData
 */
export async function uploadFile(
  file: File,
  directory = 'posts',
  authToken?: string
): Promise<S3FileMetadata> {
  const s3CoreBaseURL = (() => {
    const url = process.env.NEXT_PUBLIC_S3_CORE_URL;
    if (!url) throw new Error("Missing NEXT_PUBLIC_S3_CORE_URL");
    return url.replace(/\/+$/, ''); // strip trailing slash
  })();
  
  try {
    const url = `${s3CoreBaseURL}/files`;
    const formData = new FormData();
    formData.append('file', file);
    formData.append('directory', directory);

    const res = await axios.post<S3FileMetadata>(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
    });
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

/**
 * getFileUrl: GET /s3/files/**?public=false
 * 
 * Java code slices the path after /internal/files/, 
 * but from a client standpoint, you’d typically do something like:
 * GET /s3/files/actualKey?public=false
 */
export async function getFileUrl(
  fileKey: string,
  isPublic = false,
  authToken?: string
): Promise<string> {
  try {
    const url = `${s3CoreBaseURL}/files/${fileKey}?public=${isPublic}`;
    const res = await axios.get<string>(url, {
      headers: {
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
    });
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

/**
 * getPresignedUploadUrl: GET /s3/files/{fileKey}/presign-upload
 */
export async function getPresignedUploadUrl(
  fileKey: string,
  authToken?: string
): Promise<string> {
  try {
    const url = `${s3CoreBaseURL}/files/${fileKey}/presign-upload`;
    const res = await axios.get<string>(url, {
      headers: {
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
    });
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

/**
 * deleteFile: DELETE /s3/files/** 
 */
export async function deleteFile(fileKey: string, authToken?: string): Promise<string> {
  try {
    const url = `${s3CoreBaseURL}/files/${fileKey}`;
    const res = await axios.delete<string>(url, {
      headers: {
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
    });
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

/**
 * listFiles: GET /s3/files?prefix=someFolder/
 */
export async function listFiles(prefix: string, authToken?: string): Promise<S3FileMetadata[]> {
  try {
    const url = `${s3CoreBaseURL}/files?prefix=${encodeURIComponent(prefix)}`;
    const res = await axios.get<S3FileMetadata[]>(url, {
      headers: {
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
    });
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

// ---------------
// Error Handling
// ---------------
function handleAxiosError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    const err = error as AxiosError;
    throw new Error(err.response?.data?.toString() || err.message);
  }
  throw error;
}
