package com.zblog.zblogcommentcore.dto;

public class ReactionSummaryDTO {
    private Long likeCount;
    private Long laughCount;
    private Long sadCount;
    private Long insightfulCount;

    // Getters and setters
    public Long getLikeCount() {
        return likeCount;
    }
    public void setLikeCount(Long likeCount) {
        this.likeCount = likeCount;
    }
    public Long getLaughCount() {
        return laughCount;
    }
    public void setLaughCount(Long laughCount) {
        this.laughCount = laughCount;
    }
    public Long getSadCount() {
        return sadCount;
    }
    public void setSadCount(Long sadCount) {
        this.sadCount = sadCount;
    }
    public Long getInsightfulCount() {
        return insightfulCount;
    }
    public void setInsightfulCount(Long insightfulCount) {
        this.insightfulCount = insightfulCount;
    }
}
