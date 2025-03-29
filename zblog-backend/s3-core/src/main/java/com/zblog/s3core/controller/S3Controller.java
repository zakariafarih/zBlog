package com.zblog.s3core.controller;

import com.zblog.s3core.dto.S3FileMetadata;
import com.zblog.s3core.exception.S3ServiceException;
import com.zblog.s3core.service.S3Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.net.URL;
import java.util.List;

@RestController
@RequestMapping("/s3")
public class S3Controller {

    private final S3Service s3Service;

    @Autowired
    public S3Controller(S3Service s3Service) {
        this.s3Service = s3Service;
    }

    // Endpoint for uploading files.
    // The "directory" parameter lets the caller specify a logical prefix (e.g. posts, avatars, attachments)
    @PostMapping("/upload")
    public ResponseEntity<?> uploadFile(@RequestParam("file") MultipartFile file,
                                        @RequestParam(value = "directory", defaultValue = "posts") String directory) {
        try {
            S3FileMetadata metadata = s3Service.uploadFile(file, directory);
            return ResponseEntity.ok(metadata);
        } catch (S3ServiceException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Endpoint to retrieve a file URL.
    // If the file is private, a presigned URL is returned.
    @GetMapping("/url")
    public ResponseEntity<?> getFileUrl(@RequestParam("key") String key,
                                        @RequestParam(value = "public", defaultValue = "false") boolean isPublic) {
        try {
            URL url = s3Service.getFileUrl(key, isPublic);
            return ResponseEntity.ok(url.toString());
        } catch (S3ServiceException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Endpoint to generate a presigned URL for upload (used by the frontend for direct uploads).
    @GetMapping("/presign-upload")
    public ResponseEntity<?> getPresignedUploadUrl(@RequestParam("key") String key) throws S3ServiceException {
        URL url = s3Service.generatePresignedUploadUrl(key);
        return ResponseEntity.ok(url.toString());
    }

    // Endpoint to delete a file from S3.
    @DeleteMapping("/delete")
    public ResponseEntity<?> deleteFile(@RequestParam("key") String key) {
        try {
            s3Service.deleteFile(key);
            return ResponseEntity.ok("File deleted successfully");
        } catch (S3ServiceException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    // Endpoint to list files by prefix (e.g., posts/, avatars/)
    @GetMapping("/list")
    public ResponseEntity<?> listFiles(@RequestParam("prefix") String prefix) {
        try {
            List<S3FileMetadata> files = s3Service.listFiles(prefix);
            return ResponseEntity.ok(files);
        } catch (S3ServiceException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
