package com.zblog.zblogusercore.dto;

import java.time.Instant;
import java.util.UUID;

public class BookmarkDTO {
    private UUID id;
    private UUID postId;
    private Instant createdAt;

    // possibly store post title or excerpt from post-core?
    // getters/setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public UUID getPostId() { return postId; }
    public void setPostId(UUID postId) { this.postId = postId; }

    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
}
