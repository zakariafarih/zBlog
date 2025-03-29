package com.zblog.zblogcommentcore.repository;

import com.zblog.zblogcommentcore.domain.entity.Comment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface CommentRepository extends JpaRepository<Comment, UUID> {

    // Retrieve top-level comments for a post
    Page<Comment> findByPostIdAndParentIdIsNullOrderByCreatedAtAsc(UUID postId, Pageable pageable);

    // Retrieve child comments for a given parent
    List<Comment> findByParentIdOrderByCreatedAtAsc(UUID parentId);

    // All comments for a post (if needed)
    Page<Comment> findByPostIdOrderByCreatedAtAsc(UUID postId, Pageable pageable);
}
