package com.zblog.zblogusercore.repository;

import com.zblog.zblogusercore.domain.entity.Bookmark;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

import java.util.UUID;

public interface BookmarkRepository extends JpaRepository<Bookmark, UUID> {
    Page<Bookmark> findByUserId(String userId, Pageable pageable);
    Optional<Bookmark> findByUserIdAndPostId(String userId, UUID postId);
}
