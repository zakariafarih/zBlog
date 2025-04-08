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
  commentCount?: number;
}

export interface TagDTO {
  name: string;
  category: TagCategory;
}

export interface ReactionDTO {
  id: string;
  likeCount: number;
  heartCount: number;
  bookmarkCount: number;
}

import { Page } from './userService';
import { TagCategory } from '@/lib/getSmartTagCategory';

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

  const baseUrl = process.env.NEXT_PUBLIC_POST_CORE_URL?.replace(/\/+$/, "") || "";
  const url = `${baseUrl}/api/posts/explore?${params.toString()}`;

  const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};

  // 1. Fetch posts from explore endpoint
  const res = await axios.get<Page<PostDTO>>(url, { headers });

  // 2. Log visit to backend
  const visitUrl = `${baseUrl}/api/posts/visit`;
  try {
    await axios.post(
      visitUrl,
      {
        type: "explore_posts",
        keywords,
        tags,
        sort,
        page,
        size,
      },
      { headers }
    );
  } catch (e) {
    console.warn("Failed to log explore posts visit:", e);
  }

  return res.data;
}

/**
 * CREATE: POST /post/api/posts
 */
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

/**
 * GET single post: GET /post/api/posts/{postId}
 */
export async function getPost(postId: string, authToken?: string): Promise<PostDTO> {
  const url = `${postCoreBaseURL}/api/posts/${postId}`;
  const res = await axios.get<PostDTO>(url, {
    headers: { ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}) },
  });
  return res.data;
}

/**
 * UPDATE post: PUT /post/api/posts/{postId}
 */
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

/**
 * DELETE post: DELETE /post/api/posts/{postId}
 */
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

/**
 * LIST posts: GET /post/api/posts?publishedOnly=...&page=X&size=Y
 */
export async function getAllPosts(
  publishedOnly: boolean,
  page: number,
  size: number,
  authToken?: string
): Promise<Page<PostDTO>> {
  const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};
  const url = `${postCoreBaseURL}/api/posts?publishedOnly=${publishedOnly}&page=${page}&size=${size}`;
  const res = await axios.get<Page<PostDTO>>(url, { headers });

  /*
  const visitUrl = `${postCoreBaseURL}/api/posts/visit`;
  try {
    await axios.post(visitUrl, {
      type: "view_all_posts",
      page,
      size,
      publishedOnly,
    }, { headers });
  } catch (e) {
    console.warn("Failed to log post list visit:", e);
  }
    */
  return res.data;
}

/**
 * SEARCH posts: GET /post/api/posts/search?keyword=...&publishedOnly=...
 */
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

/**
 * LIST posts by author: GET /post/api/posts/by-author/{authorId}?publishedOnly=...
 */
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

/**
 * INCREMENT view count: PATCH /post/api/posts/{postId}/view
 */
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

/**
 * REACT: PATCH /post/api/posts/{postId}/react?type=like|heart|...
 * Updated to return ReactionDTO instead of full PostDTO.
 */
export async function react(
  postId: string,
  reactionType: string,
  authToken?: string
): Promise<ReactionDTO> {
  try {
    const url = `${postCoreBaseURL}/api/posts/${postId}/react?type=${reactionType}`;
    const res = await axios.patch<ReactionDTO>(
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

/**
 * GET ALL TAGS: GET /post/api/tags
 */
export async function getAllTags(authToken?: string): Promise<TagDTO[]> {
  try {
    const url = `${postCoreBaseURL}/api/tags`;
    const res = await axios.get<TagDTO[]>(url, {
      headers: {
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
      },
    });
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

function handleAxiosError(error: unknown): never {
  if (axios.isAxiosError(error)) {
    const err = error as AxiosError;
    throw new Error(err.response?.data?.toString() || err.message);
  }
  throw error;
}
