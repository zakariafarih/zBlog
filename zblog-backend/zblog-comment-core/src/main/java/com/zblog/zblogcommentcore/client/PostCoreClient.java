package com.zblog.zblogcommentcore.client;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.UUID;

@Service
public class PostCoreClient {

    private final RestTemplate restTemplate;

    @Value("${post.core.url}") // e.g. http://post-core-service:8081
    private String postCoreBaseUrl;

    public PostCoreClient(RestTemplateBuilder builder) {
        this.restTemplate = builder.build();
    }

    public void validatePostExists(UUID postId) {
        try {
            // e.g. GET /api/posts/{postId}
            restTemplate.getForObject(postCoreBaseUrl + "/post/api/posts/" + postId, Object.class);
            // if 200 => post exists
        } catch (Exception ex) {
            // If post-core returns 404 or an error, rethrow or handle
            throw new IllegalArgumentException("Post does not exist: " + postId);
        }
    }
}
