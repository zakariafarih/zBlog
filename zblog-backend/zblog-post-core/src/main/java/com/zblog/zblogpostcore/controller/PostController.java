package com.zblog.zblogpostcore.controller;

import com.zblog.zblogpostcore.dto.PostDTO;
import com.zblog.zblogpostcore.dto.PostDetailDTO;
import com.zblog.zblogpostcore.service.PostService;
import com.zblog.zblogpostcore.util.SecurityUtil;
import jakarta.validation.constraints.Pattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/post/api/posts")
@Validated
public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    /**
     * Explore posts with optional filtering by keywords and tags, sorting, and pagination.
     *
     * Query parameters:
     * - tags: comma-separated list (optional)
     * - keywords: full-text search (optional)
     * - sort: "recent", "popular", or "mostLiked" (defaults to "recent")
     * - page & size: pagination controls
     */
    @GetMapping("/explore")
    public Page<PostDTO> explorePosts(
            @RequestParam(required = false) String tags,
            @RequestParam(required = false) String keywords,
            @RequestParam(defaultValue = "recent")
            @Pattern(regexp = "recent|popular|mostLiked", message = "Invalid sort value")
            String sort,
            Pageable pageable) {

        String currentUserId = SecurityUtil.getCurrentUserIdOrNull();
        List<String> tagList = (tags != null && !tags.isBlank())
                ? List.of(tags.split(",")).stream().map(String::trim).filter(s -> !s.isEmpty()).collect(Collectors.toList())
                : null;
        return postService.explorePosts(keywords, tagList, sort, pageable, currentUserId);
    }

    // CREATE
    @PostMapping
    public PostDTO createPost(@RequestBody PostDTO postDTO) {
        String currentUserId = SecurityUtil.getCurrentUserId();
        return postService.createPost(postDTO, currentUserId);
    }

    // READ (single post)
    @GetMapping("/{postId}")
    public PostDetailDTO getPost(@PathVariable("postId") UUID postId) {
        String currentUserId = SecurityUtil.getCurrentUserIdOrNull();
        return postService.getFullPost(postId, currentUserId);
    }

    // UPDATE
    @PutMapping("/{postId}")
    public PostDTO updatePost(@PathVariable("postId") UUID postId, @RequestBody PostDTO postDTO) {
        String currentUserId = SecurityUtil.getCurrentUserId();
        return postService.updatePost(postId, postDTO, currentUserId);
    }

    // DELETE
    @DeleteMapping("/{postId}")
    public void deletePost(@PathVariable("postId") UUID postId) {
        String currentUserId = SecurityUtil.getCurrentUserId();
        postService.deletePost(postId, currentUserId);
    }

    // LIST/PAGINATION - gets all or only published
    @GetMapping
    public Page<PostDTO> getAllPosts(@RequestParam(value = "publishedOnly", defaultValue = "true") boolean publishedOnly,
                                     Pageable pageable) {
        return postService.getAllPosts(publishedOnly, pageable);
    }

    // SEARCH
    @GetMapping("/search")
    public Page<PostDTO> searchPosts(@RequestParam("keyword") String keyword,
                                     @RequestParam(value = "publishedOnly", defaultValue = "true") boolean publishedOnly,
                                     Pageable pageable) {
        return postService.searchPosts(keyword, publishedOnly, pageable);
    }

    // LIST BY AUTHOR
    @GetMapping("/by-author/{authorId}")
    public Page<PostDTO> getPostsByAuthor(@PathVariable("authorId") String authorId,
                                          @RequestParam(value = "publishedOnly", defaultValue = "true") boolean publishedOnly,
                                          Pageable pageable) {
        return postService.getPostsByAuthor(authorId, publishedOnly, pageable);
    }

    // INCREMENT VIEW COUNT
    @PatchMapping("/{postId}/view")
    public PostDTO incrementView(@PathVariable("postId") UUID postId) {
        return postService.incrementViewCount(postId);
    }

    // REACT
    @PatchMapping("/{postId}/react")
    public PostDTO react(@PathVariable("postId") UUID postId,
                         @RequestParam("type") String reactionType) {
        String currentUserId = SecurityUtil.getCurrentUserId();
        return postService.reactToPost(postId, reactionType, currentUserId);
    }
}
