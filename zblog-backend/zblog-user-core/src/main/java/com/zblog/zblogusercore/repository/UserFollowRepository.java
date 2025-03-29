package com.zblog.zblogusercore.repository;

import com.zblog.zblogusercore.domain.entity.UserFollow;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface UserFollowRepository extends JpaRepository<UserFollow, UUID> {
}
