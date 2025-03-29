package com.zblog.zblogpostcore.service.impl;

import com.zblog.s3core.service.S3Service;
import com.zblog.zblogpostcore.domain.entity.Post;
import com.zblog.zblogpostcore.domain.entity.Tag;
import com.zblog.zblogpostcore.dto.PostDTO;
import com.zblog.zblogpostcore.exception.PostNotFoundException;
import com.zblog.zblogpostcore.repository.PostRepository;
import com.zblog.zblogpostcore.repository.TagRepository;
import com.zblog.zblogpostcore.service.PostService;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.net.URL;
import java.util.*;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;
    private final TagRepository tagRepository;
    private final S3Service s3Service;

    @Autowired
    public PostServiceImpl(PostRepository postRepository,
                           TagRepository tagRepository
            ,S3Service s3Service) {
        this.postRepository = postRepository;
        this.tagRepository = tagRepository;
        this.s3Service = s3Service;
    }

    @Override
    public PostDTO createPost(PostDTO postDTO, String currentUserId) {
        Post post = new Post();
        post.setAuthorId(currentUserId);
        post.setTitle(postDTO.getTitle());
        post.setContent(postDTO.getContent());
        post.setPublished(postDTO.isPublished());
        post.setBannerImageFileId(postDTO.getBannerImageFileId());
        post.setScheduledPublishAt(postDTO.getScheduledPublishAt());

        // Initialize counters
        post.setLikeCount(0);
        post.setHeartCount(0);
        post.setBookmarkCount(0);

        // Attach tags
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
        existing.setBannerImageFileId(postDTO.getBannerImageFileId());
        existing.setScheduledPublishAt(postDTO.getScheduledPublishAt());

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

        // S3 Cleanup
        if (existing.getBannerImageFileId() != null) {
            try {
                s3Service.deleteFile(existing.getBannerImageFileId());
            } catch (Exception e) {
                // swallow error
            }
        }

        postRepository.delete(existing);
    }

    @Override
    public PostDTO getPost(UUID postId, String currentUserId) {
        Post post = postRepository.findById(postId)
                .orElseThrow(() -> new PostNotFoundException("Post not found"));

        if (!post.isPublished() && !post.getAuthorId().equals(currentUserId)) {
            throw new SecurityException("This post is unpublished and you are not the owner");
        }
        return mapToDTO(post, true);
    }

    @Override
    public Page<PostDTO> getAllPosts(boolean onlyPublished, Pageable pageable) {
        // If we only want published posts
        if (onlyPublished) {
            return postRepository.findByIsPublishedTrue(pageable)
                    .map(entity -> mapToDTO(entity, false));
        }
        // Return all posts, ignoring publish state
        return postRepository.findAll(pageable)
                .map(entity -> mapToDTO(entity, false));
    }

    @Override
    public Page<PostDTO> searchPosts(String keyword, boolean onlyPublished, Pageable pageable) {
        Page<Post> page = postRepository.findByTitleContainingIgnoreCaseOrContentContainingIgnoreCase(keyword, keyword, pageable);

        if (onlyPublished) {
            List<Post> filtered = page.getContent().stream()
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
            return postRepository.findByIsPublishedTrueAndAuthorId(authorId, pageable)
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
            case "like":
                post.setLikeCount(post.getLikeCount() + 1);
                break;
            case "heart":
                post.setHeartCount(post.getHeartCount() + 1);
                break;
            case "bookmark":
                post.setBookmarkCount(post.getBookmarkCount() + 1);
                break;
            default:
                // You could throw an exception or ignore unknown reaction types
                throw new IllegalArgumentException("Unknown reaction type: " + reactionType);
        }
        Post saved = postRepository.save(post);
        return mapToDTO(saved, false);
    }

    // ---------- Helpers ----------

    /**
     * Resolve a list of tag names into Tag entities. Creates new if doesn't exist.
     */
    private List<Tag> resolveTags(List<String> tagNames) {
        return tagNames.stream()
                .map(tagName -> {
                    Tag existing = tagRepository.findByNameIgnoreCase(tagName).orElse(null);
                    if (existing == null) {
                        existing = new Tag();
                        existing.setName(tagName);
                    }
                    return existing;
                })
                .collect(Collectors.toList());
    }

    /**
     * Convert an entity to a PostDTO, resolving the bannerImageUrl from s3-core.
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
        dto.setBannerImageFileId(post.getBannerImageFileId());
        dto.setCreatedAt(post.getCreatedAt());
        dto.setUpdatedAt(post.getUpdatedAt());

        dto.setTags(post.getTags().stream()
                .map(Tag::getName)
                .collect(Collectors.toList()));

        if (resolveBannerUrl && post.getBannerImageFileId() != null) {
            try {
                URL url = s3Service.getFileUrl(post.getBannerImageFileId(), false);
                dto.setBannerImageUrl(url.toString());
            } catch (Exception e) {
                // fallback or log error
                dto.setBannerImageUrl(null);
            }
        }

        return dto;
    }
}
