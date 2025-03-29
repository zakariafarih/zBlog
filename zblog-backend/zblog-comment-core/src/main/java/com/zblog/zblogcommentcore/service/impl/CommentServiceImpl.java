package com.zblog.zblogcommentcore.service.impl;

import com.zblog.zblogcommentcore.domain.entity.Comment;
import com.zblog.zblogcommentcore.dto.*;
import com.zblog.zblogcommentcore.exception.CommentNotFoundException;
import com.zblog.zblogcommentcore.repository.CommentRepository;
import com.zblog.zblogcommentcore.service.CommentService;
import com.zblog.zblogpostcore.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final PostService postService;

    @Autowired
    public CommentServiceImpl(CommentRepository commentRepository, PostService postService) {
        this.commentRepository = commentRepository;
        this.postService = postService;
    }

    @Override
    public CommentResponseDTO createComment(CommentCreateRequest request, String currentUserId) {
        // Validate post existence via post-core, e.g.:
        postService.validatePostExists(request.getPostId());

        Comment comment = new Comment();
        comment.setPostId(request.getPostId());
        comment.setAuthorId(currentUserId);
        comment.setContent(request.getContent());
        comment.setParentId(request.getParentId());

        commentRepository.save(comment);
        return toDTO(comment, true);
    }

    @Override
    public CommentResponseDTO updateComment(CommentUpdateRequest request, String currentUserId) {
        Comment existing = commentRepository.findById(request.getId())
                .orElseThrow(() -> new CommentNotFoundException("Comment not found"));

        if (!existing.getAuthorId().equals(currentUserId)) {
            throw new SecurityException("Not authorized to update this comment");
        }
        existing.setContent(request.getContent());
        commentRepository.save(existing);

        return toDTO(existing, true);
    }

    @Override
    public void deleteComment(UUID commentId, String currentUserId) {
        Comment existing = commentRepository.findById(commentId)
                .orElseThrow(() -> new CommentNotFoundException("Comment not found"));

        if (!existing.getAuthorId().equals(currentUserId)) {
            throw new SecurityException("Not authorized to delete this comment");
        }
        // Hard delete
        // optional recursion if you want to delete children as well
        commentRepository.delete(existing);
    }

    @Override
    public Page<CommentResponseDTO> getTopLevelComments(UUID postId, Pageable pageable) {
        Page<Comment> page = commentRepository.findByPostIdAndParentIdIsNullOrderByCreatedAtAsc(postId, pageable);
        return page.map(comment -> toDTO(comment, false));
    }

    @Override
    public CommentResponseDTO getComment(UUID commentId) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new CommentNotFoundException("Comment not found"));
        return toDTO(comment, true);
    }

    @Override
    public CommentResponseDTO reactToComment(UUID commentId, String reactionType) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new CommentNotFoundException("Comment not found"));

        switch (reactionType.toLowerCase()) {
            case "like":
                comment.setLikeCount(comment.getLikeCount() + 1);
                break;
            case "laugh":
                comment.setLaughCount(comment.getLaughCount() + 1);
                break;
            case "sad":
                comment.setSadCount(comment.getSadCount() + 1);
                break;
            case "insightful":
                comment.setInsightfulCount(comment.getInsightfulCount() + 1);
                break;
            default:
                throw new IllegalArgumentException("Unknown reaction type: " + reactionType);
        }
        commentRepository.save(comment);
        return toDTO(comment, true);
    }

    @Override
    public CommentResponseDTO buildCommentThread(UUID commentId) {
        Comment root = commentRepository.findById(commentId)
                .orElseThrow(() -> new CommentNotFoundException("Comment not found"));
        return toDTO(root, true);
    }

    // ---------- Helpers ----------

    private CommentResponseDTO toDTO(Comment comment, boolean buildReplies) {
        CommentResponseDTO dto = new CommentResponseDTO();
        dto.setId(comment.getId());
        dto.setPostId(comment.getPostId());
        dto.setAuthorId(comment.getAuthorId());
        dto.setContent(comment.getContent());
        dto.setCreatedAt(comment.getCreatedAt());
        dto.setUpdatedAt(comment.getUpdatedAt());
        dto.setParentId(comment.getParentId());
        dto.setLikeCount(comment.getLikeCount());
        dto.setLaughCount(comment.getLaughCount());
        dto.setSadCount(comment.getSadCount());
        dto.setInsightfulCount(comment.getInsightfulCount());

        if (buildReplies) {
            // gather replies
            List<Comment> children = commentRepository.findByParentIdOrderByCreatedAtAsc(comment.getId());
            List<CommentResponseDTO> childDTOs = children.stream()
                    .map(child -> toDTO(child, true))
                    .collect(Collectors.toList());
            dto.setReplies(childDTOs);
        }
        return dto;
    }
}
