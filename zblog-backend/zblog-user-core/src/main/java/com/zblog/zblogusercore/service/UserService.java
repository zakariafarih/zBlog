package com.zblog.zblogusercore.service;

import com.zblog.zblogusercore.dto.UserProfileDTO;

public interface UserService {
    UserProfileDTO getProfile(String userId, boolean resolveImageUrl);
    UserProfileDTO updateProfile(String userId, UserProfileDTO profileDTO);
}
