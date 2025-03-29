package com.zblog.zblogusercore.domain.entity;

import jakarta.persistence.*;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "user_follows", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"followerId", "followedId"})
})
public class UserFollow {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String followerId;
    private String followedId;
    private Instant createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = Instant.now();
    }

    // getters/setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getFollowerId() { return followerId; }
    public void setFollowerId(String followerId) { this.followerId = followerId; }

    public String getFollowedId() { return followedId; }
    public void setFollowedId(String followedId) { this.followedId = followedId; }

    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }
}
