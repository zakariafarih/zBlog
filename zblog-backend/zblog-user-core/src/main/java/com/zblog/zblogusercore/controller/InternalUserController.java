package com.zblog.zblogusercore.controller;

import com.zblog.zblogusercore.dto.InitUserRequest;
import com.zblog.zblogusercore.dto.UserProfileDTO;
import com.zblog.zblogusercore.service.InitUserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/user/internal")
public class InternalUserController {

    private final InitUserService initUserService;

    // We’ll load this from application.properties (or environment variable)
    private final String internalApiSecret;

    public InternalUserController(InitUserService initUserService,
                                  @Value("${security.internal.shared-secret}") String internalApiSecret) {
        this.initUserService = initUserService;
        this.internalApiSecret = internalApiSecret;
    }

    @PostMapping(value = "/init-user", consumes = MediaType.APPLICATION_JSON_VALUE)
    @ResponseStatus(HttpStatus.OK)
    public Map<String, Object> initUser(
            @RequestHeader("X-Internal-Secret") String providedSecret,
            @RequestBody InitUserRequest request
    ) {
        // Verify the shared secret:
        if (!internalApiSecret.equals(providedSecret)) {
            throw new UnauthorizedInternalApiCallException("Invalid internal secret");
        }

        // Call service to create (or find) user profile
        UserProfileDTO userProfile = initUserService.initUserProfile(
                request.getSub(),
                request.getUsername(),
                request.getEmail()
        );

        return Map.of(
                "status", "ok",
                "message", "User profile ensured",
                "userId", userProfile != null ? request.getSub() : null
        );
    }

    // You might want to define a custom exception -> 401
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    static class UnauthorizedInternalApiCallException extends RuntimeException {
        public UnauthorizedInternalApiCallException(String message) {
            super(message);
        }
    }
}
