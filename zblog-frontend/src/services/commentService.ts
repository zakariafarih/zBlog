import axios, { AxiosError } from 'axios';
import { Page } from '@/services/userService'; // or define again

const commentCoreBaseURL =
  process.env.NEXT_PUBLIC_COMMENT_CORE_URL ?? 'http://localhost:8082/comment';

// From your DTOs:

export interface CommentCreateRequest {
  postId: string;
  parentId?: string;
  content: string;
  attachmentFileId?: string;
}

export interface CommentUpdateRequest {
  id: string;
  content: string;
  attachmentFileId?: string;
}

export interface CommentResponseDTO {
  id: string;
  postId: string;
  authorId: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  parentId?: string;
  likeCount: number;
  laughCount: number;
  sadCount: number;
  insightfulCount: number;
  replies?: CommentResponseDTO[];
  attachmentFileId?: string;
  attachmentFileUrl?: string;
}

/**
 * commentHealthCheck: GET /comment/health
 */
export async function getCommentHealth(): Promise<string> {
  try {
    const url = `${commentCoreBaseURL}/health`;
    const res = await axios.get<string>(url);
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

/**
 * createComment: POST /comment/api/comments
 */
export async function createComment(
  data: CommentCreateRequest,
  authToken?: string
): Promise<CommentResponseDTO> {
  try {
    const url = `${commentCoreBaseURL}/api/comments`;
    const res = await axios.post<CommentResponseDTO>(url, data, {
      headers: {
        'Content-Type': 'application/json',
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
    });
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

/**
 * updateComment: PUT /comment/api/comments/{commentId}
 */
export async function updateComment(
  commentId: string,
  data: CommentUpdateRequest,
  authToken?: string
): Promise<CommentResponseDTO> {
  try {
    const url = `${commentCoreBaseURL}/api/comments/${commentId}`;
    const res = await axios.put<CommentResponseDTO>(url, data, {
      headers: {
        'Content-Type': 'application/json',
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
    });
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

/**
 * deleteComment: DELETE /comment/api/comments/{commentId}
 */
export async function deleteComment(
  commentId: string,
  authToken?: string
): Promise<void> {
  try {
    const url = `${commentCoreBaseURL}/api/comments/${commentId}`;
    await axios.delete<void>(url, {
      headers: {
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
    });
  } catch (error) {
    handleAxiosError(error);
  }
}

/**
 * getTopLevelComments: GET /comment/api/comments/post/{postId}?page=X&size=Y
 */
export async function getTopLevelComments(
  postId: string,
  page: number,
  size: number,
  authToken?: string
): Promise<Page<CommentResponseDTO>> {
  try {
    const url = `${commentCoreBaseURL}/api/comments/post/${postId}?page=${page}&size=${size}`;
    const res = await axios.get<Page<CommentResponseDTO>>(url, {
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
 * getComment: GET /comment/api/comments/{commentId}
 */
export async function getComment(commentId: string): Promise<CommentResponseDTO> {
  try {
    const url = `${commentCoreBaseURL}/api/comments/${commentId}`;
    const res = await axios.get<CommentResponseDTO>(url);
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

/**
 * getCommentThread: GET /comment/api/comments/{commentId}/thread
 */
export async function getCommentThread(
  commentId: string
): Promise<CommentResponseDTO> {
  try {
    const url = `${commentCoreBaseURL}/api/comments/${commentId}/thread`;
    const res = await axios.get<CommentResponseDTO>(url);
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

/**
 * toggleReaction: PATCH /comment/api/comments/{commentId}/react?type=like|laugh|sad|insightful
 */
export async function toggleReaction(
  commentId: string,
  reactionType: string,
  authToken?: string
): Promise<CommentResponseDTO> {
  try {
    const url = `${commentCoreBaseURL}/api/comments/${commentId}/react?type=${reactionType}`;
    const res = await axios.patch<CommentResponseDTO>(
      url,
      {},
      {
        headers: {
          ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        },
      }
    );
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
