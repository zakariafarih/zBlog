package com.zblog.zblogcommentcore.client;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
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

    public void validatePostExists(UUID postId, String accessToken) {
        try {
            String fullUrl = postCoreBaseUrl.endsWith("/")
                    ? postCoreBaseUrl + "post/api/posts/" + postId
                    : postCoreBaseUrl + "/post/api/posts/" + postId;

            HttpHeaders headers = new HttpHeaders();
            headers.setBearerAuth(accessToken);

            HttpEntity<Void> entity = new HttpEntity<>(headers);
            // If the GET fails (e.g. 404, 401) an exception is thrown.
            restTemplate.exchange(fullUrl, HttpMethod.GET, entity, Object.class);
        } catch (Exception ex) {
            throw new IllegalArgumentException("Post check failed: " + postId, ex);
        }
    }
}
