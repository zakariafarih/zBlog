import axios, { AxiosError } from 'axios';

const postCoreBaseURL =
  (process.env.NEXT_PUBLIC_POST_CORE_URL ?? 'http://localhost:8081/post').replace(/\/+$/, '');

  export interface PostDTO {
    id?: string;
    authorId?: string;
    title: string;
    content: string;
    published?: boolean;
    viewCount?: number;
    likeCount?: number;
    heartCount?: number;
    bookmarkCount?: number;
    bannerImageKey?: string;
    bannerImageUrl?: string;
    createdAt?: string;
    updatedAt?: string;
    scheduledPublishAt?: string;
    tags?: string[];
  }

// The Page<T> interface can be reused from userService (or define your own).
import { Page } from './userService';

/**
 * getPostHealth: GET /post/health
 */
export async function getPostHealth(): Promise<string> {
  try {
    const url = `${postCoreBaseURL}/health`;
    const res = await axios.get<string>(url);
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

/**
 * Calls the new explore endpoint.
 */
export async function explorePosts(
  keywords: string,
  tags: string[],
  sort: "recent" | "popular" | "mostLiked",
  page: number,
  size: number,
  authToken?: string
): Promise<Page<PostDTO>> {
  const params = new URLSearchParams();
  if (keywords) params.append("keywords", keywords);
  if (tags.length > 0) params.append("tags", tags.join(","));
  params.append("sort", sort);
  params.append("page", page.toString());
  params.append("size", size.toString());

  const url = `${process.env.NEXT_PUBLIC_POST_CORE_URL?.replace(/\/+$/, "")}/api/posts/explore?${params.toString()}`;
  const res = await axios.get<Page<PostDTO>>(url, {
    headers: { ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}) },
  });
  return res.data;
}

// CREATE: POST /post/api/posts
export async function createPost(
  postDTO: PostDTO,
  authToken?: string
): Promise<PostDTO> {
  try {
    const url = `${postCoreBaseURL}/api/posts`;
    const res = await axios.post<PostDTO>(url, postDTO, {
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

export async function getPost(postId: string, authToken?: string): Promise<PostDTO> {
  const url = `${postCoreBaseURL}/api/posts/${postId}`;
  const res = await axios.get<PostDTO>(url, {
    headers: { ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}) },
  });
  return res.data;
}

// UPDATE: PUT /post/api/posts/{postId}
export async function updatePost(
  postId: string,
  postDTO: PostDTO,
  authToken?: string
): Promise<PostDTO> {
  try {
    const url = `${postCoreBaseURL}/api/posts/${postId}`;
    const res = await axios.put<PostDTO>(url, postDTO, {
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

// DELETE: DELETE /post/api/posts/{postId}
export async function deletePost(
  postId: string,
  authToken?: string
): Promise<void> {
  try {
    const url = `${postCoreBaseURL}/api/posts/${postId}`;
    await axios.delete<void>(url, {
      headers: {
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
    });
  } catch (error) {
    handleAxiosError(error);
  }
}

// LIST/PAGINATION: GET /post/api/posts?publishedOnly={true|false}&page=X&size=Y
export async function getAllPosts(
  publishedOnly: boolean,
  page: number,
  size: number,
  authToken?: string
): Promise<Page<PostDTO>> {
  const url = `${postCoreBaseURL}/api/posts?publishedOnly=${publishedOnly}&page=${page}&size=${size}`;
  const res = await axios.get<Page<PostDTO>>(url, {
    headers: { ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}) },
  });
  return res.data;
}

// SEARCH: GET /post/api/posts/search?keyword=...&publishedOnly=...
export async function searchPosts(
  keyword: string,
  publishedOnly: boolean,
  page: number,
  size: number,
  authToken?: string
): Promise<Page<PostDTO>> {
  const url = `${postCoreBaseURL}/api/posts/search?keyword=${encodeURIComponent(
    keyword
  )}&publishedOnly=${publishedOnly}&page=${page}&size=${size}`;
  const res = await axios.get<Page<PostDTO>>(url, {
    headers: { ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}) },
  });
  return res.data;
}

// LIST BY AUTHOR: GET /post/api/posts/by-author/{authorId}?publishedOnly=...
export async function getPostsByAuthor(
  authorId: string,
  publishedOnly: boolean,
  page: number,
  size: number
): Promise<Page<PostDTO>> {
  try {
    const url = `${postCoreBaseURL}/api/posts/by-author/${authorId}?publishedOnly=${publishedOnly}&page=${page}&size=${size}`;
    const res = await axios.get<Page<PostDTO>>(url);
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

// INCREMENT VIEW COUNT: PATCH /post/api/posts/{postId}/view
export async function incrementView(
  postId: string
): Promise<PostDTO> {
  try {
    const url = `${postCoreBaseURL}/api/posts/${postId}/view`;
    const res = await axios.patch<PostDTO>(url);
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

// REACT: PATCH /post/api/posts/{postId}/react?type=like|heart|...
export async function react(
  postId: string,
  reactionType: string,
  authToken?: string
): Promise<PostDTO> {
  try {
    const url = `${postCoreBaseURL}/api/posts/${postId}/react?type=${reactionType}`;
    const res = await axios.patch<PostDTO>(
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

// GET ALL TAGS: GET /post/api/tags
export async function getAllTags(): Promise<string[]> {
  try {
    const url = `${postCoreBaseURL}/api/tags`;
    const res = await axios.get<string[]>(url);
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
