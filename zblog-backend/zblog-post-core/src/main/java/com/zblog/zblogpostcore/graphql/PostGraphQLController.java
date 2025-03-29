package com.zblog.zblogpostcore.graphql;

import com.zblog.zblogpostcore.dto.PostDTO;
import com.zblog.zblogpostcore.service.PostService;
import com.zblog.zblogpostcore.util.SecurityUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.UUID;

@Controller
public class PostGraphQLController {

    private final PostService postService;

    @Autowired
    public PostGraphQLController(PostService postService) {
        this.postService = postService;
    }

    @QueryMapping
    public PostDTO getPost(@Argument UUID id) {
        String currentUserId = SecurityUtil.getCurrentUserIdOrNull();
        return postService.getPost(id, currentUserId);
    }

    @QueryMapping
    public Iterable<PostDTO> getAllPosts(@Argument boolean publishedOnly) {
        // Return first 100 for simplicity
        return postService.getAllPosts(publishedOnly, org.springframework.data.domain.PageRequest.of(0, 100));
    }

    @MutationMapping
    public PostDTO createPost(@Argument PostDTO postInput) {
        String currentUserId = SecurityUtil.getCurrentUserId();
        return postService.createPost(postInput, currentUserId);
    }
}
