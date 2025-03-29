package com.zblog.zblogpostcore.service;

import com.zblog.zblogpostcore.dto.PostDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

public interface PostService {
    PostDTO createPost(PostDTO postDTO, String currentUserId);
    PostDTO updatePost(UUID postId, PostDTO postDTO, String currentUserId);
    void deletePost(UUID postId, String currentUserId);

    PostDTO getPost(UUID postId, String currentUserId);
    Page<PostDTO> getAllPosts(boolean onlyPublished, Pageable pageable);
    Page<PostDTO> searchPosts(String keyword, boolean onlyPublished, Pageable pageable);
    Page<PostDTO> getPostsByAuthor(String authorId, boolean onlyPublished, Pageable pageable);

    PostDTO incrementViewCount(UUID postId);
    PostDTO reactToPost(UUID postId, String reactionType, String currentUserId);

    void validatePostExists(UUID postId);
}
