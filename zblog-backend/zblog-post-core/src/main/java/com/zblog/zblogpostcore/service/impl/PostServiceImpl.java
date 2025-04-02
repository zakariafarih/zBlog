package com.zblog.zblogpostcore.service.impl;

import com.zblog.zblogpostcore.client.FileClient;
import com.zblog.zblogpostcore.client.dto.FileMetadataDTO;
import com.zblog.zblogpostcore.domain.entity.Post;
import com.zblog.zblogpostcore.domain.entity.Tag;
import com.zblog.zblogpostcore.dto.PostDTO;
import com.zblog.zblogpostcore.exception.PostNotFoundException;
import com.zblog.zblogpostcore.repository.PostRepository;
import com.zblog.zblogpostcore.repository.TagRepository;
import com.zblog.zblogpostcore.service.PostService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
    private final TagRepository tagRepository;
    private final FileClient fileClient;

    @Value("${aws.bucketName}")
    private String bucketName;

    @Value("${aws.region}")
    private String awsRegion;

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
        post.setBannerImageKey(postDTO.getBannerImageKey()); // store the S3 key
        post.setScheduledPublishAt(postDTO.getScheduledPublishAt());

        // Initialize counters
        post.setLikeCount(0);
        post.setHeartCount(0);
        post.setBookmarkCount(0);

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
    public PostDTO getPost(UUID postId, String currentUserId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException("Post not found"));

        // If not published, only the owner can see it
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
    public PostDTO reactToPost(UUID postId, String reactionType, String currentUserId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException("Post not found"));

        switch (reactionType.toLowerCase()) {
            case "like" -> post.setLikeCount(post.getLikeCount() + 1);
            case "heart" -> post.setHeartCount(post.getHeartCount() + 1);
            case "bookmark" -> post.setBookmarkCount(post.getBookmarkCount() + 1);
            default -> throw new IllegalArgumentException("Unknown reaction type: " + reactionType);
        }
        Post saved = postRepository.save(post);
        return mapToDTO(saved, false);
    }

    @Override
    public void validatePostExists(UUID postId) {
        if (!postRepository.existsById(postId)) {
            throw new PostNotFoundException("Post not found for id: " + postId);
        }
    }

    // ----------------- Helpers -----------------

    /**
     * Convert the Post entity to PostDTO,
     * plus build a stable public bannerImageUrl (if any).
     */
    private PostDTO mapToDTO(Post post, boolean resolveBannerUrl) {
        PostDTO dto = new PostDTO();
        dto.setId(post.getId());
        dto.setAuthorId(post.getAuthorId());
        dto.setTitle(post.getTitle());
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

        var tagNames = post.getTags().stream()
                .map(Tag::getName)
                .collect(Collectors.toList());
        dto.setTags(tagNames);

        // If we want the banner image URL, build the public URL
        if (resolveBannerUrl && post.getBannerImageKey() != null) {
            // 100% public approach:
            String publicUrl = constructS3Url(post.getBannerImageKey());
            dto.setBannerImageUrl(publicUrl);

            /*
            // Or if you still want to call s3-core to see if it returns something:
            try {
                // isPublic=true => s3-core might simply return the direct S3 URL if your bucket is configured that way
                FileMetadataDTO meta = fileClient.getFileMetadata(post.getBannerImageKey(), true);
                if (meta != null && meta.getUrl() != null) {
                    dto.setBannerImageUrl(meta.getUrl());
                } else {
                    dto.setBannerImageUrl(publicUrl);
                }
            } catch (Exception e) {
                dto.setBannerImageUrl(publicUrl);
            }
            */
        }

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
    private Set<Tag> resolveTags(List<String> tagNames) {
        return tagNames.stream()
                .map(tagName -> tagRepository.findByNameIgnoreCase(tagName)
                        .orElseGet(() -> {
                            Tag newTag = new Tag();
                            newTag.setName(tagName);
                            return newTag;
                        }))
                .collect(Collectors.toSet());
    }
}
