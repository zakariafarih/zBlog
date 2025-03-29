package com.zblog.zblogauthcore.util;

import org.springframework.security.oauth2.jwt.Jwt;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

    private final JwtDecoder jwtDecoder;

    public JwtUtil(JwtDecoder jwtDecoder) {
        this.jwtDecoder = jwtDecoder;
    }

    public Jwt decodeToken(String token) {
        return jwtDecoder.decode(token);
    }

    // Extract user ID
    public String extractUserId(String token) {
        Jwt jwt = decodeToken(token);
        return jwt.getSubject();
    }
}
