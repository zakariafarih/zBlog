package com.zblog.s3core.service;

import com.zblog.s3core.config.S3Properties;
import com.zblog.s3core.dto.S3FileMetadata;
import com.zblog.s3core.exception.S3ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.*;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.GetObjectPresignRequest;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;

import java.io.IOException;
import java.net.URL;
import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class S3ServiceImpl implements S3Service {

    private final S3Client s3Client;
    private final S3Presigner s3Presigner;
    private final S3Properties s3Properties;

    @Autowired
    public S3ServiceImpl(S3Client s3Client, S3Presigner s3Presigner, S3Properties s3Properties) {
        this.s3Client = s3Client;
        this.s3Presigner = s3Presigner;
        this.s3Properties = s3Properties;
    }

    @Override
    public S3FileMetadata uploadFile(MultipartFile file, String directoryPrefix) throws S3ServiceException {
        if (file.isEmpty()) {
            throw new S3ServiceException("File is empty");
        }
        if (file.getSize() > s3Properties.getMaxFileSize()) {
            throw new S3ServiceException("File exceeds maximum allowed size");
        }

        String mimeType = file.getContentType();
        // Validate MIME type against whitelist/blacklist
        if (s3Properties.getAllowedMimeTypes() != null && !s3Properties.getAllowedMimeTypes().isEmpty() &&
                !s3Properties.getAllowedMimeTypes().contains(mimeType)) {
            throw new S3ServiceException("MIME type not allowed: " + mimeType);
        }
        if (s3Properties.getDisallowedMimeTypes() != null && s3Properties.getDisallowedMimeTypes().contains(mimeType)) {
            throw new S3ServiceException("MIME type is disallowed: " + mimeType);
        }

        // Sanitize filename and generate a unique key
        String originalFilename = StringUtils.cleanPath(file.getOriginalFilename());
        String uniqueKey = generateUniqueKey(directoryPrefix, originalFilename);

        PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                .bucket(s3Properties.getBucketName())
                .key(uniqueKey)
                .contentType(mimeType)
                .build();

        try {
            s3Client.putObject(putObjectRequest,
                    RequestBody.fromInputStream(file.getInputStream(), file.getSize()));
        } catch (IOException e) {
            throw new S3ServiceException("Failed to read file input stream", e);
        } catch (software.amazon.awssdk.services.s3.model.S3Exception e) {
            throw new S3ServiceException("Error uploading file to S3: " + e.awsErrorDetails().errorMessage(), e);
        }

        URL fileUrl = getFileUrl(uniqueKey, false);

        S3FileMetadata metadata = new S3FileMetadata();
        metadata.setKey(uniqueKey);
        metadata.setSize(file.getSize());
        metadata.setMimeType(mimeType);
        metadata.setUploadTimestamp(Instant.now());
        metadata.setUrl(fileUrl);

        return metadata;
    }

    @Override
    public URL getFileUrl(String key, boolean isPublic) throws S3Exception, S3ServiceException {
        if (isPublic) {
            String urlString = String.format("https://%s.s3.%s.amazonaws.com/%s",
                    s3Properties.getBucketName(), s3Properties.getRegion(), key);
            return buildUrl(urlString);
        } else {
            // Generate a presigned URL with a time-limited expiry
            GetObjectRequest getObjectRequest = GetObjectRequest.builder()
                    .bucket(s3Properties.getBucketName())
                    .key(key)
                    .build();

            GetObjectPresignRequest presignRequest = GetObjectPresignRequest.builder()
                    .signatureDuration(Duration.ofSeconds(s3Properties.getUploadExpirySeconds()))
                    .getObjectRequest(getObjectRequest)
                    .build();

            return s3Presigner.presignGetObject(presignRequest).url();
        }
    }

    @Override
    public URL generatePresignedUploadUrl(String key) throws S3Exception {
        PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                .bucket(s3Properties.getBucketName())
                .key(key)
                .build();

        PutObjectPresignRequest presignRequest = PutObjectPresignRequest.builder()
                .signatureDuration(Duration.ofSeconds(s3Properties.getUploadExpirySeconds()))
                .putObjectRequest(putObjectRequest)
                .build();

        return s3Presigner.presignPutObject(presignRequest).url();
    }

    @Override
    public void deleteFile(String key) throws S3Exception, S3ServiceException {
        DeleteObjectRequest deleteObjectRequest = DeleteObjectRequest.builder()
                .bucket(s3Properties.getBucketName())
                .key(key)
                .build();
        try {
            s3Client.deleteObject(deleteObjectRequest);
        } catch (S3Exception e) {
            throw new S3ServiceException("Error deleting file from S3: " + e.awsErrorDetails().errorMessage(), e);
        }
    }

    @Override
    public List<S3FileMetadata> listFiles(String prefix) throws S3Exception, S3ServiceException {
        List<S3FileMetadata> files = new ArrayList<>();

        ListObjectsV2Request listReq = ListObjectsV2Request.builder()
                .bucket(s3Properties.getBucketName())
                .prefix(prefix)
                .build();

        ListObjectsV2Response listRes = s3Client.listObjectsV2(listReq);

        for (S3Object s3Object : listRes.contents()) {
            // Retrieve additional metadata using a HEAD request
            HeadObjectRequest headReq = HeadObjectRequest.builder()
                    .bucket(s3Properties.getBucketName())
                    .key(s3Object.key())
                    .build();
            HeadObjectResponse headRes = s3Client.headObject(headReq);

            S3FileMetadata metadata = new S3FileMetadata();
            metadata.setKey(s3Object.key());
            metadata.setSize(s3Object.size());
            metadata.setMimeType(headRes.contentType());
            metadata.setUploadTimestamp(s3Object.lastModified());
            metadata.setUrl(getFileUrl(s3Object.key(), false));

            files.add(metadata);
        }
        return files;
    }

    private String generateUniqueKey(String directoryPrefix, String originalFilename) {
        // Replace any unsafe characters in the filename
        String sanitizedFilename = originalFilename.replaceAll("[^a-zA-Z0-9\\.\\-]", "_");
        String uniqueId = UUID.randomUUID().toString();
        // Ensure the prefix ends with a slash
        if (!directoryPrefix.endsWith("/")) {
            directoryPrefix += "/";
        }
        return directoryPrefix + uniqueId + "_" + sanitizedFilename;
    }

    private URL buildUrl(String urlString) throws S3ServiceException {
        try {
            return new URL(urlString);
        } catch (Exception e) {
            throw new S3ServiceException("Malformed URL: " + urlString, e);
        }
    }
}
