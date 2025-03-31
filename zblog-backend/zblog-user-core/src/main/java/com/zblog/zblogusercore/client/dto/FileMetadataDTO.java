package com.zblog.zblogusercore.client.dto;

import java.time.Instant;

/**
 * Mirrors the structure returned by s3-core:
 * {
 *   "key": "some-file-id",
 *   "size": 12345,
 *   "mimeType": "image/png",
 *   "uploadTimestamp": "2025-01-01T12:34:56Z",
 *   "url": "https://..."
 * }
 */
public class FileMetadataDTO {

    private String key;
    private long size;
    private String mimeType;
    private Instant uploadTimestamp;
    private String url; // s3-core returns a String URL in JSON

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
