package com.zblog.zblogusercore.controller;

import com.zblog.zblogusercore.service.FollowService;
import com.zblog.zblogusercore.util.SecurityUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user/api/follow")
public class FollowController {

    private final FollowService followService;

    @Autowired
    public FollowController(FollowService followService) {
        this.followService = followService;
    }

    @PostMapping("/{targetUserId}")
    public void followUser(@PathVariable("targetUserId") String targetUserId) {
        String currentUserId = SecurityUtil.getCurrentUserId();
        followService.followUser(currentUserId, targetUserId);
    }

    @DeleteMapping("/{targetUserId}")
    public void unfollowUser(@PathVariable("targetUserId") String targetUserId) {
        String currentUserId = SecurityUtil.getCurrentUserId();
        followService.unfollowUser(currentUserId, targetUserId);
    }
}
