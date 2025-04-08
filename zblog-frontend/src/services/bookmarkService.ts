import axios from 'axios';

const userCoreBaseURL =
  (process.env.NEXT_PUBLIC_USER_CORE_URL ?? 'http://localhost:8092/user').replace(/\/+$/, '');

export interface BookmarkDTO {
  id: string;
  postId: string;
  createdAt: string;
}

/**
 * Create a bookmark record for the given post.
 * Calls: POST /user/api/bookmarks/{postId}
 */
export async function createBookmark(
  postId: string,
  authToken?: string
): Promise<BookmarkDTO> {
  const url = `${userCoreBaseURL}/api/bookmarks/${postId}`;
  const res = await axios.post<BookmarkDTO>(
    url,
    null,
    {
      headers: {
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
    }
  );
  return res.data;
}

/**
 * Remove a bookmark record for the given post.
 * Calls: DELETE /user/api/bookmarks/{postId}
 */
export async function removeBookmark(
  postId: string,
  authToken?: string
): Promise<void> {
  const url = `${userCoreBaseURL}/api/bookmarks/${postId}`;
  await axios.delete(url, {
    headers: {
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    },
  });
}

/**
 * List bookmarks for the current user.
 * Calls: GET /user/api/bookmarks
 */
export async function listBookmarks(
  page: number,
  size: number,
  authToken?: string
): Promise<any> {
  const url = `${userCoreBaseURL}/api/bookmarks?page=${page}&size=${size}`;
  const res = await axios.get(url, {
    headers: {
      ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
    },
  });
  return res.data;
}
