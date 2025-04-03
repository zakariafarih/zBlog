import { getUserProfile } from './userService';

const authorNameCache = new Map<string, string>();

export function hasAuthor(id: string) {
  return authorNameCache.has(id);
}

export async function getAuthorName(authorId: string, authToken?: string): Promise<string> {
  if (authorNameCache.has(authorId)) {
    return authorNameCache.get(authorId)!;
  }

  try {
    const profile = await getUserProfile(authorId, authToken);
    const displayName = profile.displayName || profile.username || `User ${authorId.slice(0, 6)}`;
    authorNameCache.set(authorId, displayName);
    return displayName;
  } catch (err) {
    console.error(`Failed to fetch author for ${authorId}`, err);
    const fallback = `User ${authorId.slice(0, 6)}`;
    authorNameCache.set(authorId, fallback);
    return fallback;
  }
}
