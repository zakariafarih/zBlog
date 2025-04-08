package com.zblog.zblogusercore.service.impl;

import com.zblog.zblogusercore.client.PostCoreClient;
import com.zblog.zblogusercore.exception.PostNotFoundException;
import com.zblog.zblogusercore.domain.entity.Bookmark;
import com.zblog.zblogusercore.dto.BookmarkDTO;
import com.zblog.zblogusercore.exception.UserNotFoundException;
import com.zblog.zblogusercore.repository.BookmarkRepository;
import com.zblog.zblogusercore.repository.UserProfileRepository;
import com.zblog.zblogusercore.service.BookmarkService;
import com.zblog.zblogusercore.util.SecurityUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class BookmarkServiceImpl implements BookmarkService {

    private final BookmarkRepository bookmarkRepository;
    private final UserProfileRepository userProfileRepo;
    private final PostCoreClient postCoreClient;

    @Autowired
    public BookmarkServiceImpl(BookmarkRepository bookmarkRepository,
                               UserProfileRepository userProfileRepo,
                               PostCoreClient postCoreClient) {
        this.bookmarkRepository = bookmarkRepository;
        this.userProfileRepo = userProfileRepo;
        this.postCoreClient = postCoreClient;
    }

    @Override
    public BookmarkDTO createBookmark(String userId, UUID postId) {
        // Optionally check user existence:
        if (!userProfileRepo.existsById(userId)) {
            throw new UserNotFoundException("User not found: " + userId);
        }

        // Validate the post exists in post-core using the caller's access token.
        String accessToken = SecurityUtil.getCurrentAccessToken();
        postCoreClient.validatePostExists(postId, accessToken);

        Bookmark bookmark = new Bookmark();
        bookmark.setUserId(userId);
        bookmark.setPostId(postId);
        bookmarkRepository.save(bookmark);

        return toDTO(bookmark);
    }

    @Override
    public void removeBookmark(String userId, UUID postId) {
        // check user existence
        Bookmark bookmark = bookmarkRepository.findByUserIdAndPostId(userId, postId).orElse(null);
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
