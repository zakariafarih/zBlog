package com.zblog.zblogcommentcore.util;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationToken;

public class SecurityUtil {

    public static String getCurrentUserId() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth == null || auth.getName() == null) {
            throw new SecurityException("No authenticated user");
        }
        // typically the sub claim from Cognito
        return auth.getName();
    }

    public static String getCurrentAccessToken() {
        var authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication instanceof JwtAuthenticationToken jwtAuth) {
            return jwtAuth.getToken().getTokenValue();
        }
        throw new IllegalStateException("No valid access token found");
    }

}
