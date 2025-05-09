package com.zblog.zblogusercore.service.impl;

import com.zblog.zblogusercore.client.FileClient;
import com.zblog.zblogusercore.client.dto.FileMetadataDTO;
import com.zblog.zblogusercore.domain.entity.UserProfile;
import com.zblog.zblogusercore.dto.UserProfileDTO;
import com.zblog.zblogusercore.exception.UserNotFoundException;
import com.zblog.zblogusercore.repository.UserProfileRepository;
import com.zblog.zblogusercore.service.UserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    private final UserProfileRepository userProfileRepo;
    private final FileClient fileClient;

    public UserServiceImpl(UserProfileRepository userProfileRepo, FileClient fileClient) {
        this.userProfileRepo = userProfileRepo;
        this.fileClient = fileClient;
    }

    @Override
    public UserProfileDTO getProfile(String userId, boolean resolveImageUrl) {
        UserProfile profile = userProfileRepo.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found: " + userId));

        return toDTO(profile, resolveImageUrl);
    }

    @Override
    public UserProfileDTO updateProfile(String userId, UserProfileDTO profileDTO) {
        UserProfile profile = userProfileRepo.findById(userId)
                .orElseThrow(() -> new UserNotFoundException("User not found: " + userId));

        profile.setUsername(profileDTO.getUsername());
        profile.setDisplayName(profileDTO.getDisplayName());
        profile.setBio(profileDTO.getBio());
        profile.setProfileImageFileId(profileDTO.getProfileImageFileId());
        userProfileRepo.save(profile);

        return toDTO(profile, true);
    }

    // ---------- Helpers ----------

    private UserProfileDTO toDTO(UserProfile entity, boolean resolveImageUrl) {
        UserProfileDTO dto = new UserProfileDTO();
        dto.setUsername(entity.getUsername());
        dto.setDisplayName(entity.getDisplayName());
        dto.setBio(entity.getBio());
        dto.setProfileImageFileId(entity.getProfileImageFileId());
        dto.setCreatedAt(entity.getCreatedAt());
        dto.setUpdatedAt(entity.getUpdatedAt());

        if (resolveImageUrl && entity.getProfileImageFileId() != null) {
            // We now do a REST call to s3-core to fetch the presigned URL
            FileMetadataDTO fileMeta = fileClient.getFileMetadata(entity.getProfileImageFileId(), false);
            dto.setProfileImageUrl(fileMeta.getUrl());
        }

        return dto;
    }
}
