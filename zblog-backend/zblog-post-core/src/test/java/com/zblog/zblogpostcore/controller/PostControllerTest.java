package com.zblog.zblogpostcore.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.zblog.zblogpostcore.dto.PostDTO;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;

import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.web.servlet.MockMvc;
import com.zblog.zblogpostcore.service.PostService;

import java.util.Collections;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = PostController.class)
class PostControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Mock
    private PostService postService;

    @Test
    @WithMockUser // simulates authenticated user
    void testGetPost() throws Exception {
        UUID postId = UUID.randomUUID();
        PostDTO dto = new PostDTO();
        dto.setId(postId);
        dto.setTitle("Test");
        when(postService.getPost(any(UUID.class), any())).thenReturn(dto);

        mockMvc.perform(get("/api/posts/" + postId))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(postId.toString()))
                .andExpect(jsonPath("$.title").value("Test"));
    }

    @Test
    @WithMockUser
    void testCreatePost() throws Exception {
        PostDTO input = new PostDTO();
        input.setTitle("Hello");
        input.setContent("World");

        PostDTO output = new PostDTO();
        output.setId(UUID.randomUUID());
        output.setTitle("Hello");
        output.setContent("World");

        when(postService.createPost(any(PostDTO.class), any())).thenReturn(output);

        mockMvc.perform(post("/api/posts")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(input)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title").value("Hello"));
    }
}
