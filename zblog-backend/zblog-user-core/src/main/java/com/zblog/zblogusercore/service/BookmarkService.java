package com.zblog.zblogusercore.service;

import com.zblog.zblogusercore.dto.BookmarkDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

public interface BookmarkService {
    BookmarkDTO createBookmark(String userId, UUID postId);
    void removeBookmark(String userId, UUID postId);
    Page<BookmarkDTO> listBookmarks(String userId, Pageable pageable);
}
