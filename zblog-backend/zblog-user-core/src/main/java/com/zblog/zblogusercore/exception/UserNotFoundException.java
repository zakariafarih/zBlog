package com.zblog.zblogusercore.exception;

/**
 * Thrown when a user profile or referenced user ID does not exist
 * in the local user-core database.
 */
public class UserNotFoundException extends RuntimeException {

    public UserNotFoundException(String message) {
        super(message);
    }

    public UserNotFoundException(String userId, boolean isCurrentUser) {
        super(isCurrentUser
                ? "Current user profile not found (userId=" + userId + ")"
                : "User not found with ID: " + userId);
    }
}
