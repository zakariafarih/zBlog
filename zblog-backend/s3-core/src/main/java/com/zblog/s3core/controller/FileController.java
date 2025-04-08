package com.zblog.s3core.controller;

import com.zblog.s3core.dto.S3FileMetadata;
import com.zblog.s3core.exception.S3ServiceException;
import com.zblog.s3core.service.S3Service;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.net.URL;
import java.util.List;

@RestController
@RequestMapping("/s3/files")
public class FileController {

    private final S3Service s3Service;

    public FileController(S3Service s3Service) {
        this.s3Service = s3Service;
    }

    /**
     * Upload a file to S3. Returns the file metadata (key, url, etc.).
     */
    @PostMapping
    public ResponseEntity<S3FileMetadata> uploadFile(
            @RequestParam("file") MultipartFile file,
            @RequestParam(value = "directory", defaultValue = "posts") String directory) throws S3ServiceException {

        S3FileMetadata metadata = s3Service.uploadFile(file, directory);
        return ResponseEntity.ok(metadata);
    }

    /**
     * Get a presigned download URL or a direct public URL if isPublic=true.
     */
    @GetMapping(value = "/**", params = "!prefix")
    public ResponseEntity<String> getFileUrl(
            HttpServletRequest request,
            @RequestParam(value = "public", defaultValue = "false") boolean isPublic) throws S3ServiceException {

        String fullPath = request.getRequestURI().substring(
                request.getRequestURI().indexOf("/internal/files/") + "/internal/files/".length()
        );

        URL url = s3Service.getFileUrl(fullPath, isPublic);
        return ResponseEntity.ok(url.toString());
    }

    /**
     * Generate a presigned upload URL for direct client PUT.
     */
    @GetMapping("/{fileKey}/presign-upload")
    public ResponseEntity<String> getPresignedUploadUrl(
            @PathVariable("fileKey") String fileKey) throws S3ServiceException {

        URL url = s3Service.generatePresignedUploadUrl(fileKey);
        return ResponseEntity.ok(url.toString());
    }

    /**
     * Delete an existing file from S3.
     */
    @DeleteMapping("/**")
    public ResponseEntity<String> deleteFile(HttpServletRequest request) throws S3ServiceException {
        // Extract full path after "/internal/files/"
        String fullPath = request.getRequestURI().substring(
                request.getRequestURI().indexOf("/internal/files/") + "/internal/files/".length()
        );

        s3Service.deleteFile(fullPath);
        return ResponseEntity.ok("File deleted successfully");
    }

    /**
     * List files by prefix (e.g., "posts/").
     * GET /internal/files?prefix=avatars/
     */
    @GetMapping
    public ResponseEntity<List<S3FileMetadata>> listFiles(@RequestParam("prefix") String prefix) throws S3ServiceException {
        List<S3FileMetadata> files = s3Service.listFiles(prefix);
        return ResponseEntity.ok(files);
    }

    @GetMapping("/metadata/**")
    public ResponseEntity<S3FileMetadata> getFileMetadata(
            HttpServletRequest request,
            @RequestParam(value = "public", defaultValue = "false") boolean isPublic
    ) throws S3ServiceException {
        String fullPath = request.getRequestURI().substring(
                request.getRequestURI().indexOf("/metadata/") + "/metadata/".length()
        );

        S3FileMetadata metadata = new S3FileMetadata();
        metadata.setKey(fullPath);
        metadata.setUrl(s3Service.getFileUrl(fullPath, isPublic));
        return ResponseEntity.ok(metadata);
    }
}
