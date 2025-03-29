package com.zblog.zblogusercore.controller;

import com.zblog.zblogusercore.dto.BookmarkDTO;
import com.zblog.zblogusercore.service.BookmarkService;
import com.zblog.zblogusercore.util.SecurityUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/bookmarks")
public class BookmarkController {

    private final BookmarkService bookmarkService;

    @Autowired
    public BookmarkController(BookmarkService bookmarkService) {
        this.bookmarkService = bookmarkService;
    }

    @PostMapping("/{postId}")
    public BookmarkDTO createBookmark(@PathVariable("postId") UUID postId) {
        String userId = SecurityUtil.getCurrentUserId();
        return bookmarkService.createBookmark(userId, postId);
    }

    @DeleteMapping("/{postId}")
    public void removeBookmark(@PathVariable("postId") UUID postId) {
        String userId = SecurityUtil.getCurrentUserId();
        bookmarkService.removeBookmark(userId, postId);
    }

    @GetMapping
    public Page<BookmarkDTO> listBookmarks(Pageable pageable) {
        String userId = SecurityUtil.getCurrentUserId();
        return bookmarkService.listBookmarks(userId, pageable);
    }
}
