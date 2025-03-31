package com.zblog.zblogusercore.service.impl;

import com.zblog.zblogusercore.domain.entity.UserFollow;
import com.zblog.zblogusercore.exception.UserNotFoundException;
import com.zblog.zblogusercore.repository.UserFollowRepository;
import com.zblog.zblogusercore.repository.UserProfileRepository;
import com.zblog.zblogusercore.service.FollowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FollowServiceImpl implements FollowService {

    private final UserFollowRepository followRepo;
    private final UserProfileRepository profileRepo;

    @Autowired
    public FollowServiceImpl(UserFollowRepository followRepo, UserProfileRepository profileRepo) {
        this.followRepo = followRepo;
        this.profileRepo = profileRepo;
    }

    @Override
    public void followUser(String followerId, String targetUserId) {
        // validate user existence
        if (!profileRepo.existsById(followerId) || !profileRepo.existsById(targetUserId)) {
            throw new UserNotFoundException("One of the user IDs is invalid");
        }
        // create record
        UserFollow uf = new UserFollow();
        uf.setFollowerId(followerId);
        uf.setFollowedId(targetUserId);
        followRepo.save(uf);
    }

    @Override
    public void unfollowUser(String followerId, String targetUserId) {
        // remove from DB
        followRepo.findByFollowerIdAndFollowedId(followerId, targetUserId)
                .ifPresent(followRepo::delete);
    }
}
