package com.zblog.s3core.service;

import com.zblog.s3core.dto.S3FileMetadata;
import com.zblog.s3core.exception.S3ServiceException;
import org.springframework.web.multipart.MultipartFile;

import java.net.URL;
import java.util.List;

public interface S3Service {
    S3FileMetadata uploadFile(MultipartFile file, String directoryPrefix) throws S3ServiceException;
    URL getFileUrl(String key, boolean isPublic) throws S3ServiceException;
    URL generatePresignedUploadUrl(String key) throws S3ServiceException;
    void deleteFile(String key) throws S3ServiceException;
    List<S3FileMetadata> listFiles(String prefix) throws S3ServiceException;
}
