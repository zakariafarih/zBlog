package com.zblog.zblogusercore.service.impl;

import com.zblog.zblogusercore.domain.entity.Bookmark;
import com.zblog.zblogusercore.dto.BookmarkDTO;
import com.zblog.zblogusercore.exception.UserNotFoundException;
import com.zblog.zblogusercore.repository.BookmarkRepository;
import com.zblog.zblogusercore.repository.UserProfileRepository;
import com.zblog.zblogusercore.service.BookmarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class BookmarkServiceImpl implements BookmarkService {

    private final BookmarkRepository bookmarkRepository;
    private final UserProfileRepository userProfileRepo;
    // possibly a postCoreClient to validate post existence

    @Autowired
    public BookmarkServiceImpl(BookmarkRepository bookmarkRepository,
                               UserProfileRepository userProfileRepo) {
        this.bookmarkRepository = bookmarkRepository;
        this.userProfileRepo = userProfileRepo;
    }

    @Override
    public BookmarkDTO createBookmark(String userId, UUID postId) {
        // optionally check user existence:
        if (!userProfileRepo.existsById(userId)) {
            throw new UserNotFoundException("User not found: " + userId);
        }
        // optionally call postCore to validate the post

        Bookmark bookmark = new Bookmark();
        bookmark.setUserId(userId);
        bookmark.setPostId(postId);
        bookmarkRepository.save(bookmark);

        return toDTO(bookmark);
    }

    @Override
    public void removeBookmark(String userId, UUID postId) {
        // optionally check user existence
        Bookmark bookmark = bookmarkRepository.findAll().stream()
                .filter(b -> b.getUserId().equals(userId) && b.getPostId().equals(postId))
                .findFirst().orElse(null);
        if (bookmark != null) {
            bookmarkRepository.delete(bookmark);
        }
    }

    @Override
    public Page<BookmarkDTO> listBookmarks(String userId, Pageable pageable) {
        Page<Bookmark> page = bookmarkRepository.findByUserId(userId, pageable);
        return page.map(this::toDTO);
    }

    // helpers
    private BookmarkDTO toDTO(Bookmark bookmark) {
        BookmarkDTO dto = new BookmarkDTO();
        dto.setId(bookmark.getId());
        dto.setPostId(bookmark.getPostId());
        dto.setCreatedAt(bookmark.getCreatedAt());
        return dto;
    }
}
