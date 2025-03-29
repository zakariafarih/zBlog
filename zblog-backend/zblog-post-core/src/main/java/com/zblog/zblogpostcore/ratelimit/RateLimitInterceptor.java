package com.zblog.zblogpostcore.ratelimit;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import java.time.Instant;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Component
public class RateLimitInterceptor implements HandlerInterceptor {

    // userId + endpoint + postId -> last 5 timestamps
    private final Map<String, CircularBuffer> callsMap = new ConcurrentHashMap<>();

    // Limit: 5 calls in 1 minute
    private static final int MAX_CALLS = 5;
    private static final long INTERVAL_MS = 60_000;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler)
            throws Exception {

        // Only handle certain endpoints
        String uri = request.getRequestURI();
        if (isRateLimitedEndpoint(uri) && "PATCH".equalsIgnoreCase(request.getMethod())) {

            String userId = request.getUserPrincipal() != null ? request.getUserPrincipal().getName() : "anonymous";
            String postId = extractPostId(uri); // e.g. from /api/posts/{postId}/react or /view
            if (postId == null) {
                return true; // no rate limit if no postId
            }

            String key = userId + "_" + uri;

            CircularBuffer timestamps = callsMap.computeIfAbsent(key, k -> new CircularBuffer(MAX_CALLS));

            Instant now = Instant.now();
            // Add timestamp, check oldest
            if (!timestamps.allow(now.toEpochMilli(), INTERVAL_MS)) {
                response.setStatus(HttpStatus.TOO_MANY_REQUESTS.value());
                response.getWriter().write("Rate limit exceeded. Try again later.");
                return false;
            }
        }

        return true;
    }

    private boolean isRateLimitedEndpoint(String uri) {
        return uri.matches(".*/api/posts/.*/react.*") || uri.matches(".*/api/posts/.*/view.*");
    }

    private String extractPostId(String uri) {
        // naive approach: /api/posts/{postId}/react
        String[] parts = uri.split("/");
        if (parts.length >= 4) {
            return parts[3]; // the part after /api/posts/
        }
        return null;
    }

    // Circular buffer storing timestamps in ms
    static class CircularBuffer {
        private final long[] times;
        private int index;

        public CircularBuffer(int size) {
            this.times = new long[size];
            this.index = 0;
        }

        public synchronized boolean allow(long now, long intervalMs) {
            // Check oldest
            long oldest = times[index];
            if (now - oldest < intervalMs) {
                // within interval => not allowed
                return false;
            }
            times[index] = now;
            index = (index + 1) % times.length;
            return true;
        }
    }
}
