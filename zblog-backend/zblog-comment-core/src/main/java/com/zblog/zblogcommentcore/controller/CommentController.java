package com.zblog.zblogcommentcore.controller;

import com.zblog.zblogcommentcore.dto.*;
import com.zblog.zblogcommentcore.service.CommentService;
import com.zblog.zblogcommentcore.util.SecurityUtil;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/comments")
@Validated
public class CommentController {

    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @PostMapping
    public CommentResponseDTO createComment(@Valid @RequestBody CommentCreateRequest request) {
        String currentUserId = SecurityUtil.getCurrentUserId();
        return commentService.createComment(request, currentUserId);
    }

    @PutMapping("/{commentId}")
    public CommentResponseDTO updateComment(@PathVariable("commentId") UUID commentId,
                                            @Valid @RequestBody CommentUpdateRequest request) {
        String currentUserId = SecurityUtil.getCurrentUserId();
        request.setId(commentId); // ensure ID matches
        return commentService.updateComment(request, currentUserId);
    }

    @DeleteMapping("/{commentId}")
    public void deleteComment(@PathVariable("commentId") UUID commentId) {
        String currentUserId = SecurityUtil.getCurrentUserId();
        commentService.deleteComment(commentId, currentUserId);
    }

    @GetMapping("/post/{postId}")
    public Page<CommentResponseDTO> getTopLevelComments(@PathVariable("postId") UUID postId, Pageable pageable) {
        return commentService.getTopLevelComments(postId, pageable);
    }

    @GetMapping("/{commentId}")
    public CommentResponseDTO getComment(@PathVariable("commentId") UUID commentId) {
        return commentService.getComment(commentId);
    }

    @PatchMapping("/{commentId}/react")
    public CommentResponseDTO reactToComment(@PathVariable("commentId") UUID commentId,
                                             @RequestParam("type") String reactionType) {
        return commentService.reactToComment(commentId, reactionType);
    }

    // optional route to get entire comment subtree
    @GetMapping("/{commentId}/thread")
    public CommentResponseDTO getCommentThread(@PathVariable("commentId") UUID commentId) {
        return commentService.buildCommentThread(commentId);
    }
}
