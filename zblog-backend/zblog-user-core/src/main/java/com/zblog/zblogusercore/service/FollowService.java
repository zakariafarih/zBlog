package com.zblog.zblogusercore.service;

public interface FollowService {
    void followUser(String followerId, String targetUserId);
    void unfollowUser(String followerId, String targetUserId);
    // listFollowing, listFollowers, etc.
}
