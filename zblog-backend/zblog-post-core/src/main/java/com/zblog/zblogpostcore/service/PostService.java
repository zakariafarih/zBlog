package com.zblog.zblogpostcore.service;

import com.zblog.zblogpostcore.dto.PostDTO;
import com.zblog.zblogpostcore.dto.ReactionDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
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

    void validatePostExists(UUID postId);

    /**
     * Returns posts filtered by optional keywords and tags, sorted by the provided option.
     *
     * @param keywords      full-text keyword search (optional)
     * @param tags          list of tags to filter (optional)
     * @param sort          "recent", "popular", or "mostLiked"
     * @param pageable      pagination info
     * @param currentUserId current user (can be null for public)
     * @return a page of PostDTO results
     */
    Page<PostDTO> explorePosts(String keywords, List<String> tags, String sort, Pageable pageable, String currentUserId);

    /**
     * Returns the full post (with all content) for detail view.
     * This does not truncate the content.
     */
    PostDTO getFullPost(UUID postId, String currentUserId);

    void incrementCommentCount(UUID postId);

    void decrementCommentCount(UUID postId);

    ReactionDTO reactToPost(UUID postId, String reactionType, String currentUserId);
}
