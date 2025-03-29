package com.zblog.zblogcommentcore.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

import java.util.UUID;

public class CommentCreateRequest {

    @NotNull(message = "Post ID cannot be null")
    private UUID postId;

    private UUID parentId;

    @NotBlank(message = "Content cannot be blank")
    private String content;

    // Getters/Setters
    public UUID getPostId() { return postId; }
    public void setPostId(UUID postId) { this.postId = postId; }

    public UUID getParentId() { return parentId; }
    public void setParentId(UUID parentId) { this.parentId = parentId; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }
}
