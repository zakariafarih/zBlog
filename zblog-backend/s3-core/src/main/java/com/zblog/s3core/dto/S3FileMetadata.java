package com.zblog.s3core.dto;

import java.net.URL;
import java.time.Instant;

public class S3FileMetadata {
    private String key;
    private long size;
    private String mimeType;
    private Instant uploadTimestamp;
    private URL url;

    public String getKey() {
        return key;
    }
    public void setKey(String key) {
        this.key = key;
    }
    public long getSize() {
        return size;
    }
    public void setSize(long size) {
        this.size = size;
    }
    public String getMimeType() {
        return mimeType;
    }
    public void setMimeType(String mimeType) {
        this.mimeType = mimeType;
    }
    public Instant getUploadTimestamp() {
        return uploadTimestamp;
    }
    public void setUploadTimestamp(Instant uploadTimestamp) {
        this.uploadTimestamp = uploadTimestamp;
    }
    public URL getUrl() {
        return url;
    }
    public void setUrl(URL url) {
        this.url = url;
    }
}
