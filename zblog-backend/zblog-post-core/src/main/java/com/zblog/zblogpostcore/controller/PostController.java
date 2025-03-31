package com.zblog.zblogpostcore.controller;

import com.zblog.zblogpostcore.dto.PostDTO;
import com.zblog.zblogpostcore.service.PostService;
import com.zblog.zblogpostcore.util.SecurityUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/post/api/posts")
@Validated
public class PostController {

    private final PostService postService;

    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    // CREATE
    @PostMapping
    public PostDTO createPost(@RequestBody PostDTO postDTO) {
        String currentUserId = SecurityUtil.getCurrentUserId();
        return postService.createPost(postDTO, currentUserId);
    }

    // READ (single post)
    @GetMapping("/{postId}")
    public PostDTO getPost(@PathVariable("postId") UUID postId) {
        String currentUserId = SecurityUtil.getCurrentUserIdOrNull();
        return postService.getPost(postId, currentUserId);
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
