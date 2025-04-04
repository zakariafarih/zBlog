package com.zblog.zblogcommentcore.service.impl;

import com.zblog.zblogcommentcore.client.FileClient;
import com.zblog.zblogcommentcore.client.PostCoreClient;
import com.zblog.zblogcommentcore.domain.entity.Comment;
import com.zblog.zblogcommentcore.dto.*;
import com.zblog.zblogcommentcore.exception.CommentNotFoundException;
import com.zblog.zblogcommentcore.repository.CommentRepository;
import com.zblog.zblogcommentcore.service.CommentService;
import com.zblog.zblogcommentcore.service.CommentReactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.zblog.zblogcommentcore.util.SecurityUtil;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CommentServiceImpl implements CommentService {

    private final CommentRepository commentRepository;
    private final PostCoreClient postCoreClient;
    private final CommentReactionService reactionService;
    private final FileClient fileClient;

    @Autowired
    public CommentServiceImpl(
            CommentRepository commentRepository,
            PostCoreClient postCoreClient,
            CommentReactionService reactionService,
            FileClient fileClient) {

        this.commentRepository = commentRepository;
        this.postCoreClient = postCoreClient;
        this.reactionService = reactionService;
        this.fileClient = fileClient;
    }

    @Override
    public CommentResponseDTO createComment(CommentCreateRequest request, String currentUserId, String accessToken) {
        // Validate that the post exists using the provided JWT token
        postCoreClient.validatePostExists(request.getPostId(), accessToken);

        Comment comment = new Comment();
        comment.setPostId(request.getPostId());
        comment.setAuthorId(currentUserId);
        comment.setContent(request.getContent());
        comment.setParentId(request.getParentId());
        // Store attachment file ID if provided
        comment.setAttachmentFileId(request.getAttachmentFileId());

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
        existing.setAttachmentFileId(request.getAttachmentFileId());

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

        // Optionally delete the attachment from s3-core if it exists
        if (existing.getAttachmentFileId() != null) {
            fileClient.deleteFile(existing.getAttachmentFileId());
        }

        deleteCommentAndChildren(existing);
    }

    private void deleteCommentAndChildren(Comment comment) {
        List<Comment> children = commentRepository.findByParentIdOrderByCreatedAtAsc(comment.getId());
        for (Comment child : children) {
            deleteCommentAndChildren(child);
        }
        commentRepository.delete(comment);
    }

    @Override
    public Page<CommentResponseDTO> getTopLevelComments(UUID postId, Pageable pageable) {
        var page = commentRepository.findByPostIdAndParentIdIsNullOrderByCreatedAtAsc(postId, pageable);
        return page.map(comment -> toDTO(comment, false));
    }

    @Override
    public CommentResponseDTO getComment(UUID commentId) {
        Comment comment = commentRepository.findById(commentId)
                .orElseThrow(() -> new CommentNotFoundException("Comment not found"));
        return toDTO(comment, true);
    }

    @Override
    public CommentResponseDTO buildCommentThread(UUID commentId) {
        Comment root = commentRepository.findById(commentId)
                .orElseThrow(() -> new CommentNotFoundException("Comment not found"));
        return toDTO(root, true);
    }

    // Helper to convert Comment entity to DTO
    private CommentResponseDTO toDTO(Comment comment, boolean buildReplies) {
        CommentResponseDTO dto = new CommentResponseDTO();
        dto.setId(comment.getId());
        dto.setPostId(comment.getPostId());
        dto.setAuthorId(comment.getAuthorId());
        dto.setContent(comment.getContent());
        dto.setCreatedAt(comment.getCreatedAt());
        dto.setUpdatedAt(comment.getUpdatedAt());
        dto.setParentId(comment.getParentId());

        // Get reaction summary from reaction service
        var summary = reactionService.getReactionSummary(comment.getId());
        dto.setLikeCount(summary.getLikeCount());
        dto.setLaughCount(summary.getLaughCount());
        dto.setSadCount(summary.getSadCount());
        dto.setInsightfulCount(summary.getInsightfulCount());

        dto.setAttachmentFileId(comment.getAttachmentFileId());
        if (comment.getAttachmentFileId() != null) {
            try {
                var fileMeta = fileClient.getFileMetadata(comment.getAttachmentFileId(), false);
                dto.setAttachmentFileUrl(fileMeta.getUrl());
            } catch (Exception e) {
                dto.setAttachmentFileUrl(null);
            }
        }

        if (buildReplies) {
            var children = commentRepository.findByParentIdOrderByCreatedAtAsc(comment.getId());
            var childDTOs = children.stream()
                    .map(child -> toDTO(child, true))
                    .collect(Collectors.toList());
            dto.setReplies(childDTOs);
        }

        return dto;
    }
}
