import { useInfiniteQuery } from "@tanstack/react-query";
import { getTopLevelComments } from "@/services/commentService";
import { useAuth } from "react-oidc-context";

export function useComments(postId: string) {
  const auth = useAuth();
  const token = auth.user?.access_token;

  const {
    data,
    fetchNextPage,
    isLoading,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["comments", postId],
    queryFn: ({ pageParam = 0 }) =>
      getTopLevelComments(postId, pageParam, 10, token),
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.last ? undefined : lastPage.number + 1,
    enabled: !!postId && !!token,
  });

  const comments = data?.pages.flatMap((page) => page.content) ?? [];

  return {
    comments,
    hasNextPage: hasNextPage ?? false,
    fetchNextPage: fetchNextPage ?? (() => {}),
    isLoading,
  };
}

