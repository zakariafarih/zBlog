package com.zblog.zblogpostcore.client;

import com.zblog.zblogpostcore.client.dto.FileMetadataDTO;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

/**
 * A REST-based client to communicate with the s3-core microservice.
 * This ensures post-core does NOT rely on s3-core's Java code,
 * but only on a well-defined REST contract.
 */
@Component
public class FileClient {

    private final RestTemplate restTemplate;
    private final String s3CoreUrl;

    public FileClient(@Value("${s3.core.url}") String s3CoreUrl,
                      RestTemplateBuilder restTemplateBuilder) {
        this.s3CoreUrl = s3CoreUrl;
        this.restTemplate = restTemplateBuilder.build();
    }

    /**
     * Retrieve metadata (including a presigned URL) for a given fileId.
     * The s3-core endpoint is assumed:
     *  GET /internal/files/{fileId}?public=false
     * returning JSON with the final presigned or public URL.
     */
    @CircuitBreaker(name = "s3CoreCircuitBreaker", fallbackMethod = "getFileMetadataFallback")
    @Retry(name = "s3CoreRetry")
    public FileMetadataDTO getFileMetadata(String fileId, boolean isPublic) {
        String url = String.format("%s/s3/files/%s?public=%s", s3CoreUrl, fileId, isPublic);
        ResponseEntity<FileMetadataDTO> response = restTemplate.getForEntity(url, FileMetadataDTO.class);
        return response.getBody();
    }

    /**
     * Delete a file from s3-core.
     * The s3-core endpoint is:
     *  DELETE /internal/files/{fileId}
     */
    @CircuitBreaker(name = "s3CoreCircuitBreaker", fallbackMethod = "deleteFileFallback")
    @Retry(name = "s3CoreRetry")
    public void deleteFile(String fileId) {
        String url = String.format("%s/internal/files/%s", s3CoreUrl, fileId);
        restTemplate.exchange(url, HttpMethod.DELETE, null, Void.class);
    }

    // --- Fallbacks if s3-core is unreachable ---

    private FileMetadataDTO getFileMetadataFallback(String fileId, boolean isPublic, Throwable t) {
        // Return an empty or placeholder object
        FileMetadataDTO fallback = new FileMetadataDTO();
        fallback.setKey(fileId);
        fallback.setUrl(null);
        fallback.setMimeType(null);
        fallback.setSize(0);
        return fallback;
    }

    private void deleteFileFallback(String fileId, Throwable t) {
        // Possibly log or do nothing. The file won't get deleted in s3.
        // You could queue a retry or mark "orphan" file references.
    }
}
