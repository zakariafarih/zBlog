package com.zblog.zblogcommoncore.dto;

import java.time.Instant;

public class ApiResponse<T> {
    private T data;
    private String message;
    private Instant timestamp;

    public ApiResponse() {
        this.timestamp = Instant.now();
    }

    public ApiResponse(T data, String message) {
        this.data = data;
        this.message = message;
        this.timestamp = Instant.now();
    }

    public T getData() {
        return data;
    }
    public void setData(T data) {
        this.data = data;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public Instant getTimestamp() {
        return timestamp;
    }
    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }
}
