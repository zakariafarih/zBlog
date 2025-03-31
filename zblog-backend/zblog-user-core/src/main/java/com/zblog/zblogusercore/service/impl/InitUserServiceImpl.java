package com.zblog.zblogusercore.service.impl;

import com.zblog.zblogusercore.domain.entity.UserProfile;
import com.zblog.zblogusercore.dto.UserProfileDTO;
import com.zblog.zblogusercore.repository.UserProfileRepository;
import com.zblog.zblogusercore.service.InitUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.Instant;

@Service
public class InitUserServiceImpl implements InitUserService {

    private final UserProfileRepository userProfileRepo;

    @Autowired
    public InitUserServiceImpl(UserProfileRepository userProfileRepo) {
        this.userProfileRepo = userProfileRepo;
    }

    @Override
    public UserProfileDTO initUserProfile(String sub, String username, String email) {
        return userProfileRepo.findById(sub)
                .map(this::toDTO) // if found, just return the existing user
                .orElseGet(() -> {
                    // otherwise create a new one
                    UserProfile newProfile = new UserProfile();
                    newProfile.setUserId(sub);
                    // username uniqueness might matter; handle conflicts if needed
                    newProfile.setUsername(username != null ? username : sub);
                    newProfile.setDisplayName(username);
                    // You can store email if you have a column for it or some other logic
                    newProfile.setBio(null);
                    newProfile.setCreatedAt(Instant.now());
                    newProfile.setUpdatedAt(Instant.now());
                    userProfileRepo.save(newProfile);
                    return toDTO(newProfile);
                });
    }

    private UserProfileDTO toDTO(UserProfile entity) {
        UserProfileDTO dto = new UserProfileDTO();
        dto.setUsername(entity.getUsername());
        dto.setDisplayName(entity.getDisplayName());
        dto.setBio(entity.getBio());
        dto.setProfileImageFileId(entity.getProfileImageFileId());
        dto.setCreatedAt(entity.getCreatedAt());
        dto.setUpdatedAt(entity.getUpdatedAt());
        return dto;
    }
}
