package com.zblog.zblogusercore.dto;

public class InitUserRequest {
    private String sub;
    private String username;
    private String email;

    // getters & setters
    public String getSub() {
        return sub;
    }
    public void setSub(String sub) {
        this.sub = sub;
    }

    public String getUsername() {
        return username;
    }
    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
}
