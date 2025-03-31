package com.zblog.zblogcommentcore.service;

import com.zblog.zblogcommentcore.domain.entity.Comment;
import com.zblog.zblogcommentcore.domain.entity.CommentReaction;
import com.zblog.zblogcommentcore.dto.ReactionSummaryDTO;
import com.zblog.zblogcommentcore.exception.CommentNotFoundException;
import com.zblog.zblogcommentcore.repository.CommentReactionRepository;
import com.zblog.zblogcommentcore.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class CommentReactionService {

    private final CommentRepository commentRepository;
    private final CommentReactionRepository reactionRepository;

    @Autowired
    public CommentReactionService(CommentRepository commentRepository,
                                  CommentReactionRepository reactionRepository) {
        this.commentRepository = commentRepository;
        this.reactionRepository = reactionRepository;
    }

    /**
     * Toggle a reaction:
     * If user already has that reaction => remove it
     * If not => create it
     */
    public void toggleReaction(UUID commentId, String userId, String reactionType) {
        // 1. Ensure comment exists
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new CommentNotFoundException("Comment not found"));

        // 2. See if user already has that reaction
        Optional<CommentReaction> existing = reactionRepository
                .findByUserIdAndCommentIdAndReactionType(userId, commentId, reactionType.toLowerCase());

        if (existing.isPresent()) {
            // user already reacted => remove
            reactionRepository.delete(existing.get());
        } else {
            // create new row
            CommentReaction r = new CommentReaction();
            r.setUserId(userId);
            r.setCommentId(commentId);
            r.setReactionType(reactionType.toLowerCase());
            reactionRepository.save(r);
        }
    }

    /**
     * Summarize reaction counts for all known types
     */
    public ReactionSummaryDTO getReactionSummary(UUID commentId) {
        ReactionSummaryDTO dto = new ReactionSummaryDTO();
        dto.setLikeCount(reactionRepository.countByCommentIdAndReactionType(commentId, "like"));
        dto.setLaughCount(reactionRepository.countByCommentIdAndReactionType(commentId, "laugh"));
        dto.setSadCount(reactionRepository.countByCommentIdAndReactionType(commentId, "sad"));
        dto.setInsightfulCount(reactionRepository.countByCommentIdAndReactionType(commentId, "insightful"));
        return dto;
    }
}
