package com.zblog.zblogusercore.dto;

import jakarta.validation.constraints.NotBlank;
import java.time.Instant;

public class UserProfileDTO {

    @NotBlank(message="Username cannot be blank")
    private String username;

    private String displayName;
    private String bio;
    private String profileImageFileId;
    private String profileImageUrl; // resolved by s3-core
    private Instant createdAt;
    private Instant updatedAt;

    public UserProfileDTO() {}

    // getters/setters
    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getDisplayName() { return displayName; }
    public void setDisplayName(String displayName) { this.displayName = displayName; }

    public String getBio() { return bio; }
    public void setBio(String bio) { this.bio = bio; }

    public String getProfileImageFileId() { return profileImageFileId; }
    public void setProfileImageFileId(String profileImageFileId) { this.profileImageFileId = profileImageFileId; }

    public String getProfileImageUrl() { return profileImageUrl; }
    public void setProfileImageUrl(String profileImageUrl) { this.profileImageUrl = profileImageUrl; }

    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }

    public Instant getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Instant updatedAt) { this.updatedAt = updatedAt; }
}
