package com.zblog.zblogusercore.domain.entity;

import jakarta.persistence.*;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "bookmarks", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"userId", "postId"})
})
public class Bookmark {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String userId;
    private UUID postId;
    private Instant createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = Instant.now();
    }

    // getters/setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }

    public UUID getPostId() { return postId; }
    public void setPostId(UUID postId) { this.postId = postId; }

    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
}
