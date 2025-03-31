package com.zblog.zblogusercore.controller;

import com.zblog.zblogusercore.dto.UserProfileDTO;
import com.zblog.zblogusercore.service.UserService;
import com.zblog.zblogusercore.util.SecurityUtil;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user/api/users")
@Validated
public class ProfileController {

    private final UserService userService;

    @Autowired
    public ProfileController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/{userId}")
    public UserProfileDTO getProfile(@PathVariable("userId") String userId) {
        // public endpoint => no ownership check
        return userService.getProfile(userId, true);
    }

    @GetMapping("/me")
    public UserProfileDTO getMyProfile() {
        String currentUserId = SecurityUtil.getCurrentUserId();
        return userService.getProfile(currentUserId, true);
    }

    @PutMapping("/me")
    public UserProfileDTO updateMyProfile(@Valid @RequestBody UserProfileDTO dto) {
        String currentUserId = SecurityUtil.getCurrentUserId();
        return userService.updateProfile(currentUserId, dto);
    }
}
