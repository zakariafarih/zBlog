package com.zblog.zblogpostcore.service.impl;

import com.zblog.zblogpostcore.client.FileClient;
import com.zblog.zblogpostcore.domain.entity.Post;
import com.zblog.zblogpostcore.domain.entity.Tag;
import com.zblog.zblogpostcore.dto.CategoryResponse;
import com.zblog.zblogpostcore.dto.PostDTO;
import com.zblog.zblogpostcore.dto.ReactionDTO;
import com.zblog.zblogpostcore.exception.PostNotFoundException;
import com.zblog.zblogpostcore.repository.PostRepository;
import com.zblog.zblogpostcore.repository.TagRepository;
import com.zblog.zblogpostcore.service.PostService;
import org.jsoup.Jsoup;
import org.jsoup.safety.Safelist;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.*;
import java.util.stream.Collectors;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.criteria.Predicate;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Service
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
    private final TagRepository tagRepository;
    private final FileClient fileClient;
    private static final Logger log = LoggerFactory.getLogger(PostServiceImpl.class);
    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${aws.bucketName}")
    private String bucketName;

    @Value("${aws.region}")
    private String awsRegion;

    @Value("${python.classifier.url}")
    private String classifierUrl;

    // Inject the EntityManager to force refresh
    @PersistenceContext
    private EntityManager entityManager;

    public PostServiceImpl(PostRepository postRepository,
                           TagRepository tagRepository,
                           FileClient fileClient) {
        this.postRepository = postRepository;
        this.tagRepository = tagRepository;
        this.fileClient = fileClient;
    }

    @Override
    public PostDTO createPost(PostDTO postDTO, String currentUserId) {
        Post post = new Post();
        post.setAuthorId(currentUserId);
        post.setTitle(postDTO.getTitle());
        post.setContent(postDTO.getContent());
        post.setPublished(postDTO.isPublished());
        post.setBannerImageKey(postDTO.getBannerImageKey());
        post.setScheduledPublishAt(postDTO.getScheduledPublishAt());

        // Initialize counters
        post.setLikeCount(0);
        post.setHeartCount(0);
        post.setBookmarkCount(0);
        post.setCommentCount(0);

        if (postDTO.getTags() != null) {
            post.setTags(resolveTags(postDTO.getTags()));
        }
        Post saved = postRepository.save(post);
        return mapToDTO(saved, true);
    }

    @Override
    public PostDTO updatePost(UUID postId, PostDTO postDTO, String currentUserId) {
        Post existing = postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException("Post not found"));

        if (!existing.getAuthorId().equals(currentUserId)) {
            throw new SecurityException("Not authorized to edit this post");
        }

        existing.setTitle(postDTO.getTitle());
        existing.setContent(postDTO.getContent());
        existing.setPublished(postDTO.isPublished());
        existing.setBannerImageKey(postDTO.getBannerImageKey());
        existing.setScheduledPublishAt(postDTO.getScheduledPublishAt());

        // Update tags
        existing.getTags().clear();
        if (postDTO.getTags() != null) {
            existing.getTags().addAll(resolveTags(postDTO.getTags()));
        }

        Post saved = postRepository.save(existing);
        return mapToDTO(saved, true);
    }

    @Override
    public void deletePost(UUID postId, String currentUserId) {
        Post existing = postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException("Post not found"));

        if (!existing.getAuthorId().equals(currentUserId)) {
            throw new SecurityException("Not authorized to delete this post");
        }

        // Optionally delete the S3 file
        if (existing.getBannerImageKey() != null) {
            try {
                fileClient.deleteFile(existing.getBannerImageKey());
            } catch (Exception e) {
                // swallow or log
            }
        }
        postRepository.delete(existing);
    }

    @Override
    @Transactional(readOnly = true)
    public PostDTO getPost(UUID postId, String currentUserId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException("Post not found"));
        // Force refresh to get latest DB state
        entityManager.refresh(post);
        if (!post.isPublished() && !post.getAuthorId().equals(currentUserId)) {
            throw new SecurityException("This post is unpublished and you are not the owner");
        }
        return mapToDTO(post, true);
    }

    @Override
    public Page<PostDTO> getAllPosts(boolean onlyPublished, Pageable pageable) {
        if (onlyPublished) {
            return postRepository.findByPublishedTrue(pageable)
                    .map(entity -> mapToDTO(entity, false));
        }
        return postRepository.findAll(pageable)
                .map(entity -> mapToDTO(entity, false));
    }

    @Override
    public Page<PostDTO> searchPosts(String keyword, boolean onlyPublished, Pageable pageable) {
        var page = postRepository.findByTitleContainingIgnoreCaseOrContentContainingIgnoreCase(
                keyword, keyword, pageable);

        if (onlyPublished) {
            var filtered = page.getContent().stream()
                    .filter(Post::isPublished)
                    .collect(Collectors.toList());
            return new PageImpl<>(
                    filtered.stream().map(p -> mapToDTO(p, false)).collect(Collectors.toList()),
                    pageable,
                    filtered.size()
            );
        }
        return page.map(post -> mapToDTO(post, false));
    }

    @Override
    public Page<PostDTO> getPostsByAuthor(String authorId, boolean onlyPublished, Pageable pageable) {
        if (onlyPublished) {
            return postRepository.findByPublishedTrueAndAuthorId(authorId, pageable)
                    .map(entity -> mapToDTO(entity, false));
        } else {
            return postRepository.findByAuthorId(authorId, pageable)
                    .map(entity -> mapToDTO(entity, false));
        }
    }

    @Override
    public PostDTO incrementViewCount(UUID postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException("Post not found"));
        post.setViewCount(post.getViewCount() + 1);
        Post saved = postRepository.save(post);
        return mapToDTO(saved, false);
    }

    @Override
    public ReactionDTO reactToPost(UUID postId, String reactionType, String currentUserId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException("Post not found"));

        switch (reactionType.toLowerCase()) {
            case "like" -> post.setLikeCount(post.getLikeCount() + 1);
            case "heart" -> post.setHeartCount(post.getHeartCount() + 1);
            case "bookmark" -> post.setBookmarkCount(post.getBookmarkCount() + 1);
            default -> throw new IllegalArgumentException("Unknown reaction type: " + reactionType);
        }
        Post saved = postRepository.save(post);

        ReactionDTO dto = new ReactionDTO();
        dto.setId(saved.getId());
        dto.setLikeCount(saved.getLikeCount());
        dto.setHeartCount(saved.getHeartCount());
        dto.setBookmarkCount(saved.getBookmarkCount());
        return dto;
    }

    @Override
    public void validatePostExists(UUID postId) {
        if (!postRepository.existsById(postId)) {
            throw new PostNotFoundException("Post not found for id: " + postId);
        }
    }

    // ----------------- Helpers -----------------

    /**
     * Convert Post entity to PostDTO and resolve banner image URL if needed.
     */
    private PostDTO mapToDTO(Post post, boolean resolveBannerUrl) {
        PostDTO dto = new PostDTO();
        dto.setId(post.getId());
        dto.setAuthorId(post.getAuthorId());
        dto.setTitle(post.getTitle());
        // Generate a sanitized excerpt from HTML content.
        dto.setContent(generateExcerpt(post.getContent(), 150));
        dto.setPublished(post.isPublished());
        dto.setViewCount(post.getViewCount());
        dto.setLikeCount(post.getLikeCount());
        dto.setHeartCount(post.getHeartCount());
        dto.setBookmarkCount(post.getBookmarkCount());
        dto.setBannerImageKey(post.getBannerImageKey());
        dto.setCreatedAt(post.getCreatedAt());
        dto.setUpdatedAt(post.getUpdatedAt());
        dto.setScheduledPublishAt(post.getScheduledPublishAt());
        dto.setTags(post.getTags().stream().map(Tag::getName).collect(Collectors.toList()));

        if (resolveBannerUrl && post.getBannerImageKey() != null) {
            dto.setBannerImageUrl(constructS3Url(post.getBannerImageKey()));
        }

        log.info("[DEBUG] Mapping post: {} with commentCount={}", post.getId(), post.getCommentCount());
        dto.setCommentCount(post.getCommentCount());

        return dto;
    }

    /**
     * Construct a stable public S3 URL, assuming your bucket allows public read.
     * Example: https://zblog-files.s3.eu-north-1.amazonaws.com/cover-images/abc.png
     */
    private String constructS3Url(String key) {
        return String.format("https://%s.s3.%s.amazonaws.com/%s", bucketName, awsRegion, key);
    }

    /**
     * Create or find Tag entities for the given list of tag names.
     */
    // It looks up each tag; if the tag exists but its category is null or blank, or if it’s new,
    // then it calls the Python service to get the category and updates the tag.
    private Set<Tag> resolveTags(List<String> tagNames) {
        return tagNames.stream().map(tagName -> {
            // Try to find an existing tag
            Tag tag = tagRepository.findByNameIgnoreCase(tagName).orElse(null);
            if (tag == null) {
                tag = new Tag();
                tag.setName(tagName);
            }
            // If the tag does not have a category, call the Python service
            if (tag.getCategory() == null || tag.getCategory().isBlank()) {
                try {
                    String url = UriComponentsBuilder.fromHttpUrl(classifierUrl)
                            .queryParam("tag", tagName)
                            .toUriString();
                    // Assuming the response maps to a POJO with fields "tag" and "category"
                    CategoryResponse response = restTemplate.getForObject(url, CategoryResponse.class);
                    if (response != null && response.getCategory() != null) {
                        tag.setCategory(response.getCategory());
                    } else {
                        tag.setCategory("misc");
                    }
                } catch (Exception ex) {
                    // Log error and fallback to "misc"
                    System.err.println("Error classifying tag '" + tagName + "': " + ex.getMessage());
                    tag.setCategory("misc");
                }
                // Save or update the tag mapping
                tag = tagRepository.save(tag);
            }
            return tag;
        }).collect(Collectors.toSet());
    }

    @Override
    public Page<PostDTO> explorePosts(String keywords, List<String> tags, String sort, Pageable pageable, String currentUserId) {
        // Build a specification for filtering
        Specification<Post> spec = (root, query, cb) -> {
            List<Predicate> predicates = new ArrayList<>();

            // Only published posts or posts by the owner (if authenticated)
            if (currentUserId == null) {
                predicates.add(cb.isTrue(root.get("published")));
            } else {
                predicates.add(cb.or(
                        cb.isTrue(root.get("published")),
                        cb.equal(root.get("authorId"), currentUserId)
                ));
            }

            if (keywords != null && !keywords.isBlank()) {
                String kw = "%" + keywords.toLowerCase() + "%";
                predicates.add(cb.or(
                        cb.like(cb.lower(root.get("title")), kw),
                        cb.like(cb.lower(root.get("content")), kw)
                ));
            }

            if (tags != null && !tags.isEmpty()) {
                // Join to tags collection and match any of the provided tags (case-insensitive)
                predicates.add(root.join("tags").get("name").in(
                        tags.stream().map(String::toLowerCase).collect(Collectors.toList())
                ));
            }

            log.info("[DEBUG] Exploring posts with keywords: {}", keywords);

            return cb.and(predicates.toArray(new Predicate[0]));
        };

        // Remove any sorting from the incoming Pageable to avoid conflicts
        Pageable unsortedPageable = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize());
        Page<Post> postPage = postRepository.findAll(spec, unsortedPageable);

        log.info("[DEBUG] Exploring posts with keywords: {}, found count: {}", keywords, postPage.getTotalElements());

        // Apply custom sorting in memory
        List<Post> sortedPosts = new ArrayList<>(postPage.getContent());
        switch (sort.toLowerCase()) {
            case "popular":
                sortedPosts.sort(Comparator.comparingLong(
                        p -> -(p.getLikeCount() + p.getHeartCount())
                ));
                break;
            case "mostliked":
                sortedPosts.sort(Comparator.comparingLong(
                        p -> -p.getLikeCount()
                ));
                break;
            case "recent":
            default:
                sortedPosts.sort(Comparator.comparing(Post::getCreatedAt, Comparator.nullsLast(Comparator.reverseOrder())));
                break;
        }

        // Map posts to DTOs (including generating a safe excerpt)
        List<PostDTO> dtos = sortedPosts.stream()
                .map(post -> mapToDTO(post, true))
                .collect(Collectors.toList());

        System.out.println("[DEBUG] Exploring posts: " + sortedPosts);

        // Return a new PageImpl preserving the original pagination metadata.
        return new PageImpl<>(dtos, pageable, postPage.getTotalElements());
    }

    /**
     * Generates a safe excerpt from HTML content using Jsoup.
     */
    private String generateExcerpt(String htmlContent, int maxLength) {
        String text = Jsoup.clean(htmlContent, Safelist.none());
        if (text.length() > maxLength) {
            return text.substring(0, maxLength).trim() + "...";
        }
        return text;
    }

    @Override
    @Transactional(readOnly = true)
    public PostDTO getFullPost(UUID postId, String currentUserId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException("Post not found"));
        // Refresh the entity so we get the latest DB state (including commentCount)
        entityManager.refresh(post);
        if (!post.isPublished() && !post.getAuthorId().equals(currentUserId)) {
            throw new SecurityException("This post is unpublished and you are not the owner");
        }
        return mapToDetailDTO(post);
    }

    /**
     * Converts a Post entity into a full-detail DTO (without truncation).
     */
    private PostDTO mapToDetailDTO(Post post) {
        PostDTO dto = new PostDTO();
        dto.setId(post.getId());
        dto.setAuthorId(post.getAuthorId());
        dto.setTitle(post.getTitle());
        // Return full content, not a truncated excerpt
        dto.setContent(post.getContent());
        dto.setPublished(post.isPublished());
        dto.setViewCount(post.getViewCount());
        dto.setLikeCount(post.getLikeCount());
        dto.setHeartCount(post.getHeartCount());
        dto.setBookmarkCount(post.getBookmarkCount());
        dto.setBannerImageKey(post.getBannerImageKey());
        dto.setCreatedAt(post.getCreatedAt());
        dto.setUpdatedAt(post.getUpdatedAt());
        dto.setScheduledPublishAt(post.getScheduledPublishAt());
        dto.setTags(post.getTags().stream().map(Tag::getName).collect(Collectors.toList()));

        System.out.println("[DEBUG] Mapping post: " + post.getId() + " with commentCount=" + post.getCommentCount());
        dto.setCommentCount(post.getCommentCount());

        if (post.getBannerImageKey() != null) {
            dto.setBannerImageUrl(constructS3Url(post.getBannerImageKey()));
        }
        return dto;
    }

    @Override
    public void incrementCommentCount(UUID postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException("Post not found"));
        post.setCommentCount(post.getCommentCount() + 1);
        postRepository.saveAndFlush(post);
    }

    @Override
    public void decrementCommentCount(UUID postId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException("Post not found"));
        // Ensure the count does not go negative
        post.setCommentCount(Math.max(0, post.getCommentCount() - 1));
        postRepository.save(post);
    }
}
