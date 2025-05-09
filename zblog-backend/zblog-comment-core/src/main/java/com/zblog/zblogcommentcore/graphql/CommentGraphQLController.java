package com.zblog.zblogcommentcore.graphql;

import com.zblog.zblogcommentcore.dto.CommentCreateRequest;
import com.zblog.zblogcommentcore.dto.CommentResponseDTO;
import com.zblog.zblogcommentcore.dto.CommentUpdateRequest;
import com.zblog.zblogcommentcore.dto.ReactionSummaryDTO;
import com.zblog.zblogcommentcore.service.CommentReactionService;
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
    private final CommentReactionService reactionService;

    @Autowired
    public CommentGraphQLController(CommentService commentService,
                                    CommentReactionService reactionService) {
        this.commentService = commentService;
        this.reactionService = reactionService;
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

    @QueryMapping
    public ReactionSummaryDTO reactionSummary(@Argument UUID commentId) {
        return reactionService.getReactionSummary(commentId);
    }

    @MutationMapping
    public CommentResponseDTO createComment(@Argument CommentCreateRequest input) {
        String userId = SecurityUtil.getCurrentUserId();
        String accessToken = SecurityUtil.getCurrentAccessToken();
        return commentService.createComment(input, userId, accessToken);
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
    public ReactionSummaryDTO toggleReaction(@Argument UUID commentId,
                                             @Argument String reactionType) {
        String userId = SecurityUtil.getCurrentUserId();
        reactionService.toggleReaction(commentId, userId, reactionType);
        return reactionService.getReactionSummary(commentId);
    }
}
