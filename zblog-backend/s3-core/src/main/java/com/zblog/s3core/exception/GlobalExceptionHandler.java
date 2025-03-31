package com.zblog.s3core.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.Instant;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(S3ServiceException.class)
    public ResponseEntity<ErrorResponse> handleS3ServiceException(S3ServiceException ex) {
        ErrorResponse response = new ErrorResponse(
                "S3_ERROR",
                ex.getMessage(),
                Instant.now()
        );
        // You could differentiate 4xx vs. 5xx if needed
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleGenericException(Exception ex) {
        ErrorResponse response = new ErrorResponse(
                "GENERIC_ERROR",
                ex.getMessage(),
                Instant.now()
        );
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
    }
}
