package com.zblog.zblogcommentcore.repository;

import com.zblog.zblogcommentcore.domain.entity.CommentReaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface CommentReactionRepository extends JpaRepository<CommentReaction, UUID> {

    // For toggling: see if the user already reacted
    Optional<CommentReaction> findByUserIdAndCommentIdAndReactionType(
            String userId, UUID commentId, String reactionType);

    // fetch all user reactions for a comment
    List<CommentReaction> findByUserIdAndCommentId(String userId, UUID commentId);

    // For counting (like summary)
    Long countByCommentIdAndReactionType(UUID commentId, String reactionType);
}
