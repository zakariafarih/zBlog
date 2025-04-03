import axios, { AxiosError } from 'axios';

/**
 * Environment-based URL for the user-core service. Adjust as needed.
 * E.g. "https://api.example.com/user"
 */
const userCoreBaseURL =
  process.env.NEXT_PUBLIC_USER_CORE_URL ?? 'http://localhost:8080/user';

// ------------------
// Type Definitions
// ------------------

/** Matches Java: InitUserRequest */
export interface InitUserRequest {
  sub: string;
  username: string;
  email: string;
}

/** Represents the response from initUser (Map<String,Object>) */
export interface InitUserResponse {
  status: string;
  message: string;
  userId?: string;
}

/** Matches Java: UserProfileDTO */
export interface UserProfileDTO {
  username: string;
  displayName?: string;
  bio?: string;
  profileImageFileId?: string;
  profileImageUrl?: string;
  createdAt?: string;  // Instant -> string in JSON
  updatedAt?: string;  // Instant -> string in JSON
}

/** Matches Java: BookmarkDTO */
export interface BookmarkDTO {
  id: string;         // UUID -> string
  postId: string;     // UUID -> string
  createdAt: string;  // Instant -> string
}

// ---------------
// Utility Functions
// ---------------

/**
 * initUser: POST /user/internal/init-user
 * 
 * @param payload  Body of type InitUserRequest
 * @param providedSecret  Value for "X-Internal-Secret" header
 * @param authToken  Optional Bearer token
 */
export async function initUser(
  payload: InitUserRequest,
  providedSecret: string,
  authToken?: string
): Promise<InitUserResponse> {
  try {
    const url = `${userCoreBaseURL}/internal/init-user`;
    const res = await axios.post<InitUserResponse>(url, payload, {
      headers: {
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        'X-Internal-Secret': providedSecret,
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

/**
 * healthCheck: GET /user/health
 */
export async function getUserHealth(): Promise<string> {
  try {
    const url = `${userCoreBaseURL}/health`;
    const res = await axios.get<string>(url);
    return res.data;
  } catch (error) {
    handleAxiosError(error);
  }
}

/**
 * followUser: POST /user/api/follow/{targetUserId}
 */
export async function followUser(
  targetUserId: string,
  authToken?: string
): Promise<void> {
  try {
    const url = `${userCoreBaseURL}/api/follow/${targetUserId}`;
    await axios.post<void>(
      url,
      {},
      {
        headers: {
          ...(authToken ? { Authorization: `Bearer ${authToken}` } : {}),
        },
      }
    );
  } catch (error) {
    handleAxiosError(error);
  }
}

/**
 * unfollowUser: DELETE /user/api/follow/{targetUserId}
 */
export async function unfollowUser(
  targetUserId: string,
  authToken?: string
): Promise<void> {
  try {
    const url = `${userCoreBaseURL}/api/follow/${targetUserId}`;
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
 * createBookmark: POST /user/api/bookmarks/{postId}
 * returns BookmarkDTO
 */
export async function createBookmark(
  postId: string,
  authToken?: string
): Promise<BookmarkDTO> {
  try {
    const url = `${userCoreBaseURL}/api/bookmarks/${postId}`;
    const res = await axios.post<BookmarkDTO>(
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
 * removeBookmark: DELETE /user/api/bookmarks/{postId}
 */
export async function removeBookmark(
  postId: string,
  authToken?: string
): Promise<void> {
  try {
    const url = `${userCoreBaseURL}/api/bookmarks/${postId}`;
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
 * listBookmarks: GET /user/api/bookmarks
 * 
 * Returns a "Page<BookmarkDTO>". For simplicity, we'll define a custom Paginated type.
 */
export interface Page<T> {
  content: T[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

export async function listBookmarks(
  page: number,
  size: number,
  authToken?: string
): Promise<Page<BookmarkDTO>> {
  try {
    const url = `${userCoreBaseURL}/api/bookmarks?page=${page}&size=${size}`;
    const res = await axios.get<Page<BookmarkDTO>>(url, {
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
 * getUserProfile: GET /user/api/users/{userId}
 */
export async function getUserProfile(
  userId: string,
  authToken?: string
): Promise<UserProfileDTO> {
  try {
    const url = `${userCoreBaseURL}/api/users/${userId}`;
    const res = await axios.get<UserProfileDTO>(url, {
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
 * getMyProfile: GET /user/api/users/me
 */
export async function getMyProfile(authToken?: string): Promise<UserProfileDTO> {
  try {
    const url = `${userCoreBaseURL}/api/users/me`;
    const res = await axios.get<UserProfileDTO>(url, {
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
 * updateMyProfile: PUT /user/api/users/me
 */
export async function updateMyProfile(
  profile: UserProfileDTO,
  authToken?: string
): Promise<UserProfileDTO> {
  try {
    const url = `${userCoreBaseURL}/api/users/me`;
    const res = await axios.put<UserProfileDTO>(url, profile, {
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
