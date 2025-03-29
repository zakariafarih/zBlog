package com.zblog.zblogcommentcore.domain.entity;

import jakarta.persistence.*;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "comments")
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private UUID postId;      // link to post-core
    private String authorId;  // from Cognito sub
    private String content;

    private Instant createdAt;
    private Instant updatedAt;

    private UUID parentId;    // if null => top-level comment; if not => nested

    // Reactions stored as counters: likeCount, laughCount, etc.
    private long likeCount;
    private long laughCount;
    private long sadCount;
    private long insightfulCount;

    @PrePersist
    protected void onCreate() {
        createdAt = Instant.now();
        updatedAt = createdAt;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = Instant.now();
    }

    // Getters/Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public UUID getPostId() { return postId; }
    public void setPostId(UUID postId) { this.postId = postId; }

    public String getAuthorId() { return authorId; }
    public void setAuthorId(String authorId) { this.authorId = authorId; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }

    public Instant getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Instant updatedAt) { this.updatedAt = updatedAt; }

    public UUID getParentId() { return parentId; }
    public void setParentId(UUID parentId) { this.parentId = parentId; }

    public long getLikeCount() { return likeCount; }
    public void setLikeCount(long likeCount) { this.likeCount = likeCount; }

    public long getLaughCount() { return laughCount; }
    public void setLaughCount(long laughCount) { this.laughCount = laughCount; }

    public long getSadCount() { return sadCount; }
    public void setSadCount(long sadCount) { this.sadCount = sadCount; }

    public long getInsightfulCount() { return insightfulCount; }
    public void setInsightfulCount(long insightfulCount) { this.insightfulCount = insightfulCount; }
}
