package com.zblog.zblogpostcore.client.dto;

import java.time.Instant;

/**
 * Mirrors the file response from s3-core:
 * GET /internal/files/{fileId}
 */
public class FileMetadataDTO {
    private String key;
    private long size;
    private String mimeType;
    private Instant uploadTimestamp;
    private String url; // final presigned or public URL

    public String getKey() { return key; }
    public void setKey(String key) { this.key = key; }

    public long getSize() { return size; }
    public void setSize(long size) { this.size = size; }

    public String getMimeType() { return mimeType; }
    public void setMimeType(String mimeType) { this.mimeType = mimeType; }

    public Instant getUploadTimestamp() { return uploadTimestamp; }
    public void setUploadTimestamp(Instant uploadTimestamp) { this.uploadTimestamp = uploadTimestamp; }

    public String getUrl() { return url; }
    public void setUrl(String url) { this.url = url; }
}
