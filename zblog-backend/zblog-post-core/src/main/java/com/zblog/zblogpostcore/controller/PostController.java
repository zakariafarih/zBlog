package com.zblog.zblogpostcore.controller;

import com.zblog.zblogpostcore.dto.PostDTO;
import com.zblog.zblogpostcore.dto.ReactionDTO;
import com.zblog.zblogpostcore.service.PostService;
import com.zblog.zblogpostcore.util.SecurityUtil;
import jakarta.mail.internet.MimeMessage;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.constraints.Pattern;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/post/api/posts")
@Validated
public class PostController {

    private final PostService postService;
    private final JavaMailSender mailSender;

    @Autowired
    public PostController(PostService postService, JavaMailSender mailSender) {
        this.postService = postService;
        this.mailSender = mailSender;
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
        System.out.println("HEEEEEEEEEEEEEEEEEEERE");
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
    public PostDTO getPost(@PathVariable("postId") UUID postId) {
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

    // REACT: only return reaction counts
    @PatchMapping("/{postId}/react")
    public ReactionDTO react(@PathVariable("postId") UUID postId,
                             @RequestParam("type") String reactionType) {
        String currentUserId = SecurityUtil.getCurrentUserId();
        return postService.reactToPost(postId, reactionType, currentUserId);
    }

    @PostMapping("/visit")
    public void logVisit(@RequestBody Map<String, Object> body, HttpServletRequest request) {
        String ip = request.getHeader("X-Forwarded-For");
        if (ip == null || ip.isEmpty()) {
            ip = request.getRemoteAddr();
        }

        String userId = SecurityUtil.getCurrentUserIdOrNull();
        String type = (String) body.get("type");

        if ("view_all_posts".equals(type)) {
            Integer page = (Integer) body.get("page");
            Integer size = (Integer) body.get("size");
            Boolean publishedOnly = (Boolean) body.get("publishedOnly");

            System.out.printf("User %s viewed all posts (page=%d, size=%d, publishedOnly=%s) from IP %s%n",
                    userId, page, size, publishedOnly, ip);

        } else if ("view_single_post".equals(type)) {
            String postId = (String) body.get("postId");

            System.out.printf("User %s viewed post %s from IP %s%n", userId, postId, ip);
        }

        try {
            MimeMessage message = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(message, true);
            helper.setTo("zakariafarih142@gmail.com");
            helper.setSubject("New IP Accessed Your App");
            helper.setText("A new IP accessed the endpoint: " + ip);
            mailSender.send(message);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @PatchMapping("/{postId}/comment-count")
    public void updateCommentCount(@PathVariable("postId") UUID postId,
                                   @RequestParam("delta") int delta) {
        if(delta > 0) {
            postService.incrementCommentCount(postId);
        } else if(delta < 0) {
            postService.decrementCommentCount(postId);
        }
    }
}
