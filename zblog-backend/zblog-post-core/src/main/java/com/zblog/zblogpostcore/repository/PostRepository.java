package com.zblog.zblogpostcore.repository;

import com.zblog.zblogpostcore.domain.entity.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

public interface PostRepository extends JpaRepository<Post, UUID>, JpaSpecificationExecutor<Post> {

    Page<Post> findByAuthorId(String authorId, Pageable pageable);

    Page<Post> findByTitleContainingIgnoreCase(String keyword, Pageable pageable);

    Page<Post> findByTitleContainingIgnoreCaseOrContentContainingIgnoreCase(
            String titleKeyword, String contentKeyword, Pageable pageable);

    Page<Post> findByPublishedTrue(Pageable pageable);
    Page<Post> findByPublishedTrueAndAuthorId(String authorId, Pageable pageable);

    @Query("SELECT p FROM Post p WHERE p.published = false AND p.scheduledPublishAt <= :now")
    List<Post> findReadyToPublish(Instant now);

    Page<Post> findAll(Specification<Post> spec, Pageable pageable);
}
