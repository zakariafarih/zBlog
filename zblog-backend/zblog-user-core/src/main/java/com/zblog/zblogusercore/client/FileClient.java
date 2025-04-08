package com.zblog.zblogusercore.client;

import com.zblog.zblogusercore.client.dto.FileMetadataDTO;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

/**
 * A REST-based client to communicate with the s3-core microservice.
 * This ensures user-core does NOT rely on s3-core Java classes,
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
     * The s3-core endpoint is assumed to be:
     *  GET /internal/files/{fileId}?public=false
     * which returns a JSON with the final presigned URL or public URL.
     */
    @CircuitBreaker(name = "s3CoreCircuitBreaker", fallbackMethod = "getFileUrlFallback")
    @Retry(name = "s3CoreRetry")
    public FileMetadataDTO getFileMetadata(String fileId, boolean isPublic) {
        String url = String.format("%s/files/metadata/%s?public=%s", s3CoreUrl, fileId, isPublic);
        ResponseEntity<FileMetadataDTO> response = restTemplate.getForEntity(url, FileMetadataDTO.class);
        return response.getBody();
    }

    /**
     * Fallback method if s3-core is unreachable after retries.
     * You could either return a "null" object or a default placeholder.
     */
    private FileMetadataDTO getFileUrlFallback(String fileId, boolean isPublic, Throwable t) {
        FileMetadataDTO fallback = new FileMetadataDTO();
        fallback.setKey(fileId);
        fallback.setUrl(null);
        fallback.setMimeType(null);
        fallback.setSize(0);
        // For instance, might point to a local placeholder image
        // fallback.setUrl("https://example.com/placeholder.jpg");
        return fallback;
    }
}
