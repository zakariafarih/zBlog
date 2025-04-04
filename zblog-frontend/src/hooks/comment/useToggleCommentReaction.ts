import { useState } from "react";
import { toggleReaction } from "@/services/commentService";
import { CommentResponseDTO } from "@/services/commentService";

export function useToggleCommentReaction() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>();

  const toggle = async (
    commentId: string,
    reactionType: string,
    token: string
  ): Promise<CommentResponseDTO | undefined> => {
    try {
      setLoading(true);
      setError(undefined);
      const updatedComment = await toggleReaction(commentId, reactionType, token);
      return updatedComment;
    } catch (err: any) {
      setError(err.message || "Error toggling reaction");
      return undefined;
    } finally {
      setLoading(false);
    }
  };

  return { toggle, loading, error };
}
