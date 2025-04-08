import { useState } from "react";
import { react, ReactionDTO } from "@/services/postService";

export function useTogglePostReaction() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const toggle = async (
    postId: string,
    reactionType: string,
    token: string
  ): Promise<ReactionDTO | undefined> => {
    try {
      setLoading(true);
      setError(undefined);
      const reactionUpdate = await react(postId, reactionType, token);
      return reactionUpdate;
    } catch (err: any) {
      setError(err.message || "Error toggling post reaction");
      return undefined;
    } finally {
      setLoading(false);
    }
  };

  return { toggle, loading, error };
}
