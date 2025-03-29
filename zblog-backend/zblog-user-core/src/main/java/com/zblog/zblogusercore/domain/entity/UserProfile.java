package com.zblog.zblogusercore.domain.entity;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "user_profiles")
public class UserProfile {

    @Id
    private String userId; // from Cognito sub

    @Column(unique = true, nullable = false)
    private String username; // user-chosen handle

    private String displayName;
    private String bio;
    private String profileImageFileId;
    private Instant createdAt;
    private Instant updatedAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = Instant.now();
        this.updatedAt = this.createdAt;
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = Instant.now();
    }

    // getters/setters
    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getDisplayName() { return displayName; }
    public void setDisplayName(String displayName) { this.displayName = displayName; }

    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }

    public String getProfileImageFileId() { return profileImageFileId; }
    public void setProfileImageFileId(String profileImageFileId) { this.profileImageFileId = profileImageFileId; }

    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }

    public Instant getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Instant updatedAt) { this.updatedAt = updatedAt; }
}
