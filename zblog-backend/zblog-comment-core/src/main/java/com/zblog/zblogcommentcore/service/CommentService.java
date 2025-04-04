package com.zblog.zblogcommentcore.service;

import com.zblog.zblogcommentcore.dto.CommentCreateRequest;
import com.zblog.zblogcommentcore.dto.CommentUpdateRequest;
import com.zblog.zblogcommentcore.dto.CommentResponseDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

public interface CommentService {
    CommentResponseDTO createComment(CommentCreateRequest request, String currentUserId, String accessToken);

    CommentResponseDTO updateComment(CommentUpdateRequest request, String currentUserId);

    void deleteComment(UUID commentId, String currentUserId);

    Page<CommentResponseDTO> getTopLevelComments(UUID postId, Pageable pageable);

    CommentResponseDTO getComment(UUID commentId);

    // Get nested replies by parent
    CommentResponseDTO buildCommentThread(UUID commentId);
}
