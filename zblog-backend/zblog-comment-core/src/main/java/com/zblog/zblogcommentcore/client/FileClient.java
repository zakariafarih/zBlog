package com.zblog.zblogcommentcore.client;

import com.zblog.zblogcommentcore.client.dto.FileMetadataDTO;
import io.github.resilience4j.circuitbreaker.annotation.CircuitBreaker;
import io.github.resilience4j.retry.annotation.Retry;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

@Component
public class FileClient {

    private final RestTemplate restTemplate;
    private final String s3CoreUrl;

    public FileClient(@Value("${s3.core.url}") String s3CoreUrl,
                      RestTemplateBuilder builder) {
        this.s3CoreUrl = s3CoreUrl;
        this.restTemplate = builder.build();
    }

    @CircuitBreaker(name = "s3CoreCb", fallbackMethod = "getFileFallback")
    @Retry(name = "s3CoreRetry")
    public FileMetadataDTO getFileMetadata(String fileId, boolean isPublic) {
        String url = String.format("%s/s3/files/%s?public=%s", s3CoreUrl, fileId, isPublic);
        ResponseEntity<FileMetadataDTO> resp = restTemplate.getForEntity(url, FileMetadataDTO.class);
        return resp.getBody();
    }

    @CircuitBreaker(name = "s3CoreCb", fallbackMethod = "deleteFileFallback")
    @Retry(name = "s3CoreRetry")
    public void deleteFile(String fileId) {
        String url = String.format("%s/s3/internal/files/%s", s3CoreUrl, fileId);
        restTemplate.exchange(url, HttpMethod.DELETE, null, Void.class);
    }

    // fallback methods
    private FileMetadataDTO getFileFallback(String fileId, boolean isPublic, Throwable t) {
        FileMetadataDTO fm = new FileMetadataDTO();
        fm.setKey(fileId);
        fm.setUrl(null);
        return fm;
    }
    private void deleteFileFallback(String fileId, Throwable t) {
        // do nothing or log
    }
}
