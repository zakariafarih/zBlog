package com.zblog.zblogpostcore.dto;

import jakarta.validation.constraints.NotBlank;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

public class PostDTO {

    private UUID id;
    private String authorId;

    @NotBlank(message="Title cannot be blank")
    private String title;

    @NotBlank(message="Content cannot be blank")
    private String content;

    private boolean published;
    private long viewCount;
    private long likeCount;
    private long heartCount;
    private long bookmarkCount;

    private String bannerImageKey;

    private String bannerImageUrl;   // ephemeral or fallback
    private Instant createdAt;
    private Instant updatedAt;
    private Instant scheduledPublishAt;

    private List<String> tags;

    public UUID getId() {
        return id;
    }
    public void setId(UUID id) {
        this.id = id;
    }

    public String getAuthorId() {
        return authorId;
    }
    public void setAuthorId(String authorId) {
        this.authorId = authorId;
    }

    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }
    public void setContent(String content) {
        this.content = content;
    }

    public boolean isPublished() {
        return published;
    }
    public void setPublished(boolean published) {
        this.published = published;
    }

    public long getViewCount() {
        return viewCount;
    }
    public void setViewCount(long viewCount) {
        this.viewCount = viewCount;
    }

    public long getLikeCount() {
        return likeCount;
    }
    public void setLikeCount(long likeCount) {
        this.likeCount = likeCount;
    }

    public long getHeartCount() {
        return heartCount;
    }
    public void setHeartCount(long heartCount) {
        this.heartCount = heartCount;
    }

    public long getBookmarkCount() {
        return bookmarkCount;
    }
    public void setBookmarkCount(long bookmarkCount) {
        this.bookmarkCount = bookmarkCount;
    }

    public String getBannerImageKey() {
        return bannerImageKey;
    }
    public void setBannerImageKey(String bannerImageKey) {
        this.bannerImageKey = bannerImageKey;
    }

    public String getBannerImageUrl() {
        return bannerImageUrl;
    }
    public void setBannerImageUrl(String bannerImageUrl) {
        this.bannerImageUrl = bannerImageUrl;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }
    public void setCreatedAt(Instant createdAt) {
        this.createdAt = createdAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }
    public void setUpdatedAt(Instant updatedAt) {
        this.updatedAt = updatedAt;
    }

    public Instant getScheduledPublishAt() {
        return scheduledPublishAt;
    }
    public void setScheduledPublishAt(Instant scheduledPublishAt) {
        this.scheduledPublishAt = scheduledPublishAt;
    }

    public List<String> getTags() {
        return tags;
    }
    public void setTags(List<String> tags) {
        this.tags = tags;
    }
}
