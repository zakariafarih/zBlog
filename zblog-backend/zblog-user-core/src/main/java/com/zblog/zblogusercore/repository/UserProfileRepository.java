package com.zblog.zblogusercore.repository;

import com.zblog.zblogusercore.domain.entity.UserProfile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserProfileRepository extends JpaRepository<UserProfile, String> {
    // userId = PK
    // possibly findByUsername(String username);
}
