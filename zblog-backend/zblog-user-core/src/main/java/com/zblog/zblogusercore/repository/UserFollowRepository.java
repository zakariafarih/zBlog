package com.zblog.zblogusercore.repository;

import com.zblog.zblogusercore.domain.entity.UserFollow;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserFollowRepository extends JpaRepository<UserFollow, UUID> {
    Optional<UserFollow> findByFollowerIdAndFollowedId(String followerId, String followedId);
}
