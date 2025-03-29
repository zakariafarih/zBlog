package com.zblog.zblogpostcore.domain.entity;

import jakarta.persistence.*;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String authorId;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    private boolean isPublished;
    private long viewCount;

    private long likeCount;
    private long heartCount;
    private long bookmarkCount;

    private String bannerImageFileId;

    private Instant createdAt;
    private Instant updatedAt;

    // for scheduling publication
    private Instant scheduledPublishAt;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinTable(name = "post_tags",
            joinColumns = @JoinColumn(name = "post_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id"))
    private List<Tag> tags = new ArrayList<>();

    @PrePersist
    protected void onCreate() {
        createdAt = Instant.now();
        updatedAt = createdAt;
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = Instant.now();
    }

    // Getters and Setters (no Lombok)

    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getAuthorId() { return authorId; }
    public void setAuthorId(String authorId) { this.authorId = authorId; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public boolean isPublished() { return isPublished; }
    public void setPublished(boolean published) { isPublished = published; }

    public long getViewCount() { return viewCount; }
    public void setViewCount(long viewCount) { this.viewCount = viewCount; }

    public long getLikeCount() { return likeCount; }
    public void setLikeCount(long likeCount) { this.likeCount = likeCount; }

    public long getHeartCount() { return heartCount; }
    public void setHeartCount(long heartCount) { this.heartCount = heartCount; }

    public long getBookmarkCount() { return bookmarkCount; }
    public void setBookmarkCount(long bookmarkCount) { this.bookmarkCount = bookmarkCount; }

    public String getBannerImageFileId() { return bannerImageFileId; }
    public void setBannerImageFileId(String bannerImageFileId) { this.bannerImageFileId = bannerImageFileId; }

    public Instant getCreatedAt() { return createdAt; }
    public void setCreatedAt(Instant createdAt) { this.createdAt = createdAt; }

    public Instant getUpdatedAt() { return updatedAt; }
    public void setUpdatedAt(Instant updatedAt) { this.updatedAt = updatedAt; }

    public Instant getScheduledPublishAt() { return scheduledPublishAt; }
    public void setScheduledPublishAt(Instant scheduledPublishAt) { this.scheduledPublishAt = scheduledPublishAt; }

    public List<Tag> getTags() { return tags; }
    public void setTags(List<Tag> tags) { this.tags = tags; }
}
