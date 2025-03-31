package com.zblog.zblogusercore.service.impl;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.UUID;

@Service
public class PostCoreClient {
    private final RestTemplate restTemplate;

    @Value("${post.core.url}") // e.g. http://post-core-service:8082
    private String postCoreBaseUrl;

    public PostCoreClient(RestTemplateBuilder builder) {
        this.restTemplate = builder.build();
    }

    public boolean postExists(UUID postId) {
        try {
            // e.g., GET /api/posts/{postId} which 200 if found
            restTemplate.getForObject(postCoreBaseUrl + "/api/posts/" + postId, Object.class);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
