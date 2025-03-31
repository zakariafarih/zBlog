package com.zblog.zblogcommentcore.dto;

import jakarta.validation.constraints.NotBlank;
import java.util.UUID;

public class CommentUpdateRequest {

    private UUID id; // comment ID

    @NotBlank(message = "Content cannot be blank")
    private String content;

    private String attachmentFileId;

    // Getters/Setters
    public UUID getId() { return id; }
    public void setId(UUID id) { this.id = id; }

    public String getContent() { return content; }
    public void setContent(String content) { this.content = content; }

    public String getAttachmentFileId() { return attachmentFileId; }
    public void setAttachmentFileId(String attachmentFileId) { this.attachmentFileId = attachmentFileId; }
}
