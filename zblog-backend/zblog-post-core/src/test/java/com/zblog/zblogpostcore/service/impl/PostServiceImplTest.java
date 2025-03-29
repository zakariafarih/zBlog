package com.zblog.zblogpostcore.service.impl;

import com.zblog.zblogpostcore.domain.entity.Post;
import com.zblog.zblogpostcore.dto.PostDTO;
import com.zblog.zblogpostcore.exception.PostNotFoundException;
import com.zblog.zblogpostcore.repository.PostRepository;
import com.zblog.zblogpostcore.repository.TagRepository;
import com.zblog.s3core.service.S3Service;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.*;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

class PostServiceImplTest {

    @Mock
    private PostRepository postRepository;
    @Mock
    private TagRepository tagRepository;
    @Mock
    private S3Service s3Service;

    @InjectMocks
    private PostServiceImpl postService;

    @BeforeEach
    void setup() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testCreatePost() {
        PostDTO postDTO = new PostDTO();
        postDTO.setTitle("Hello World");
        postDTO.setContent("Content here");
        postDTO.setPublished(false);

        Post postEntity = new Post();
        postEntity.setId(UUID.randomUUID());
        postEntity.setTitle("Hello World");
        postEntity.setContent("Content here");
        postEntity.setPublished(false);

        when(postRepository.save(any(Post.class))).thenReturn(postEntity);

        PostDTO result = postService.createPost(postDTO, "user123");
        assertEquals("Hello World", result.getTitle());
        verify(postRepository, times(1)).save(any(Post.class));
    }

    @Test
    void testUpdatePost() {
        UUID postId = UUID.randomUUID();
        Post existing = new Post();
        existing.setId(postId);
        existing.setAuthorId("user123");
        existing.setTitle("Old Title");

        when(postRepository.findById(postId)).thenReturn(Optional.of(existing));

        PostDTO updateDTO = new PostDTO();
        updateDTO.setTitle("New Title");
        updateDTO.setContent("Updated content");

        Post updated = new Post();
        updated.setId(postId);
        updated.setAuthorId("user123");
        updated.setTitle("New Title");
        updated.setContent("Updated content");

        when(postRepository.save(any(Post.class))).thenReturn(updated);

        PostDTO result = postService.updatePost(postId, updateDTO, "user123");
        assertEquals("New Title", result.getTitle());
        verify(postRepository, times(1)).save(any(Post.class));
    }

    @Test
    void testIncrementViewCount() {
        UUID postId = UUID.randomUUID();
        Post post = new Post();
        post.setId(postId);
        post.setViewCount(10);
        when(postRepository.findById(postId)).thenReturn(Optional.of(post));

        Post updated = new Post();
        updated.setId(postId);
        updated.setViewCount(11);
        when(postRepository.save(any(Post.class))).thenReturn(updated);

        PostDTO result = postService.incrementViewCount(postId);
        assertEquals(11, result.getViewCount());
    }
}
