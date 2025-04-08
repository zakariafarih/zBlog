package com.zblog.zblogpostcore.dto;

import java.util.UUID;

public class ReactionDTO {
    private UUID id;
    private long likeCount;
    private long heartCount;
    private long bookmarkCount;

    public UUID getId() {
        return id;
    }
    public void setId(UUID id) {
        this.id = id;
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
}
