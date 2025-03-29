package com.zblog.zblogusercore.domain.entity;

import jakarta.persistence.*;
import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "post_reaction_map", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"userId", "postId", "reactionType"})
})
public class ReactionMapping {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String userId;
    private UUID postId;
    private String reactionType; // e.g. "like", "heart", "bookmark"
    private Instant createdAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = Instant.now();
    }

    // getters/setters ...
}
