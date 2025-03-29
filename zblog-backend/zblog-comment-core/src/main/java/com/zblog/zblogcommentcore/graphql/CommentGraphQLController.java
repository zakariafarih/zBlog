package com.zblog.zblogcommentcore.graphql;

import com.zblog.zblogcommentcore.dto.CommentCreateRequest;
import com.zblog.zblogcommentcore.dto.CommentResponseDTO;
import com.zblog.zblogcommentcore.dto.CommentUpdateRequest;
import com.zblog.zblogcommentcore.service.CommentService;
import com.zblog.zblogcommentcore.util.SecurityUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.UUID;

@Controller
public class CommentGraphQLController {

    private final CommentService commentService;

    @Autowired
    public CommentGraphQLController(CommentService commentService) {
        this.commentService = commentService;
    }

    @QueryMapping
    public Iterable<CommentResponseDTO> commentsForPost(@Argument UUID postId,
                                                        @Argument Integer page,
                                                        @Argument Integer size) {
        int p = (page == null) ? 0 : page;
        int s = (size == null) ? 10 : size;
        return commentService.getTopLevelComments(postId, PageRequest.of(p, s));
    }

    @QueryMapping
    public CommentResponseDTO comment(@Argument UUID id) {
        return commentService.buildCommentThread(id);
    }

    @MutationMapping
    public CommentResponseDTO createComment(@Argument CommentCreateRequest input) {
        String userId = SecurityUtil.getCurrentUserId();
        return commentService.createComment(input, userId);
    }

    @MutationMapping
    public CommentResponseDTO updateComment(@Argument UUID id,
                                            @Argument String content) {
        String userId = SecurityUtil.getCurrentUserId();
        CommentUpdateRequest req = new CommentUpdateRequest();
        req.setId(id);
        req.setContent(content);
        return commentService.updateComment(req, userId);
    }

    @MutationMapping
    public Boolean deleteComment(@Argument UUID id) {
        String userId = SecurityUtil.getCurrentUserId();
        commentService.deleteComment(id, userId);
        return true;
    }

    @MutationMapping
    public CommentResponseDTO reactToComment(@Argument UUID id,
                                             @Argument String reactionType) {
        return commentService.reactToComment(id, reactionType);
    }
}
