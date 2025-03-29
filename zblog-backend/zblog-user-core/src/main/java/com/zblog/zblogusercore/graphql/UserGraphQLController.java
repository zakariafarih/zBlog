package com.zblog.zblogusercore.graphql;

import com.zblog.zblogusercore.dto.BookmarkDTO;
import com.zblog.zblogusercore.dto.UserProfileDTO;
import com.zblog.zblogusercore.service.BookmarkService;
import com.zblog.zblogusercore.service.UserService;
import com.zblog.zblogusercore.util.SecurityUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.stereotype.Controller;

import java.util.List;
import java.util.UUID;

@Controller
public class UserGraphQLController {

    private final UserService userService;
    private final BookmarkService bookmarkService;

    @Autowired
    public UserGraphQLController(UserService userService, BookmarkService bookmarkService) {
        this.userService = userService;
        this.bookmarkService = bookmarkService;
    }

    @QueryMapping
    public UserProfileDTO user(@Argument String userId) {
        return userService.getProfile(userId, true);
    }

    @QueryMapping
    public UserProfileDTO me() {
        String currentUserId = SecurityUtil.getCurrentUserId();
        return userService.getProfile(currentUserId, true);
    }

    @QueryMapping
    public List<BookmarkDTO> bookmarks(@Argument Integer page, @Argument Integer size) {
        String currentUserId = SecurityUtil.getCurrentUserId();
        PageRequest pr = PageRequest.of(page == null ? 0 : page, size == null ? 10 : size);
        return bookmarkService.listBookmarks(currentUserId, pr).getContent();
    }

    @MutationMapping
    public UserProfileDTO updateProfile(@Argument UserProfileDTO input) {
        String currentUserId = SecurityUtil.getCurrentUserId();
        return userService.updateProfile(currentUserId, input);
    }

    @MutationMapping
    public Boolean bookmarkPost(@Argument UUID postId) {
        String userId = SecurityUtil.getCurrentUserId();
        bookmarkService.createBookmark(userId, postId);
        return true;
    }

    @MutationMapping
    public Boolean unbookmarkPost(@Argument UUID postId) {
        String userId = SecurityUtil.getCurrentUserId();
        bookmarkService.removeBookmark(userId, postId);
        return true;
    }
}
