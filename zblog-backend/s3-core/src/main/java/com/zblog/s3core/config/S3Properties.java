package com.zblog.s3core.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@ConfigurationProperties(prefix = "aws.s3")
public class S3Properties {

    private String bucketName;
    private String region;
    private long uploadExpirySeconds;
    private long maxFileSize;
    private List<String> allowedMimeTypes;
    private List<String> disallowedMimeTypes;

    public String getBucketName() {
        return bucketName;
    }
    public void setBucketName(String bucketName) {
        this.bucketName = bucketName;
    }

    public String getRegion() {
        return region;
    }
    public void setRegion(String region) {
        this.region = region;
    }

    public long getUploadExpirySeconds() {
        return uploadExpirySeconds;
    }
    public void setUploadExpirySeconds(long uploadExpirySeconds) {
        this.uploadExpirySeconds = uploadExpirySeconds;
    }

    public long getMaxFileSize() {
        return maxFileSize;
    }
    public void setMaxFileSize(long maxFileSize) {
        this.maxFileSize = maxFileSize;
    }

    public List<String> getAllowedMimeTypes() {
        return allowedMimeTypes;
    }
    public void setAllowedMimeTypes(List<String> allowedMimeTypes) {
        this.allowedMimeTypes = allowedMimeTypes;
    }

    public List<String> getDisallowedMimeTypes() {
        return disallowedMimeTypes;
    }
    public void setDisallowedMimeTypes(List<String> disallowedMimeTypes) {
        this.disallowedMimeTypes = disallowedMimeTypes;
    }
}
