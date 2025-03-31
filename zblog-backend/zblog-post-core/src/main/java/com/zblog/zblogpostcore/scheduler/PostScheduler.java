package com.zblog.zblogpostcore.scheduler;

import com.zblog.zblogpostcore.domain.entity.Post;
import com.zblog.zblogpostcore.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.Instant;
import java.util.List;

@Component
public class PostScheduler {

    private final PostRepository postRepository;

    @Autowired
    public PostScheduler(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    /**
     * Runs every minute (60000 ms)
     * to publish posts whose scheduledPublishAt <= now
     * and isPublished == false.
     */
    @Scheduled(fixedRate = 60000)
    public void publishScheduledPosts() {
        Instant now = Instant.now();
        List<Post> unpublished = postRepository.findReadyToPublish(now);

        if (!unpublished.isEmpty()) {
            for (Post post : unpublished) {
                post.setPublished(true);
            }
            postRepository.saveAll(unpublished);
        }
    }
}
