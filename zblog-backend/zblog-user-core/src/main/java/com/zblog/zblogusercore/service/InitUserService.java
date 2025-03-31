package com.zblog.zblogusercore.service;

import com.zblog.zblogusercore.dto.UserProfileDTO;

public interface InitUserService {
    /**
     * If a user with the given Cognito sub does not exist, creates one.
     * Otherwise returns the existing user profile.
     */
    UserProfileDTO initUserProfile(String sub, String username, String email);
}
