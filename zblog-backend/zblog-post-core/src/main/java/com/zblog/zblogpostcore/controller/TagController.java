package com.zblog.zblogpostcore.controller;

import com.zblog.zblogpostcore.domain.entity.Tag;
import com.zblog.zblogpostcore.dto.CategoryResponse;
import com.zblog.zblogpostcore.dto.TagDTO;
import com.zblog.zblogpostcore.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/post/api/tags")
public class TagController {

    private final TagService tagService;
    private final RestTemplate restTemplate = new RestTemplate();

    @Value("${python.classifier.url}")
    private String classifierUrl;

    @Autowired
    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    // GET /api/tags -> returns a list of tag names
    @GetMapping
    public List<TagDTO> getAllTags() {
        return tagService.listAllTags().stream()
                .map(tag -> new TagDTO(tag.getName(), tag.getCategory()))
                .collect(Collectors.toList());
    }

    // New endpoint to re-sync (reclassify) all tags
    @PostMapping("/resync")
    public String resyncTags() {
        List<Tag> tags = tagService.listAllTags();
        for (Tag tag : tags) {
            try {
                String url = classifierUrl + "?tag=" + tag.getName();
                CategoryResponse response = restTemplate.getForObject(url, CategoryResponse.class);
                if (response != null && response.getCategory() != null) {
                    tag.setCategory(response.getCategory());
                    tagService.saveTag(tag);
                }
            } catch (Exception ex) {
                System.err.println("Error re-syncing tag '" + tag.getName() + "': " + ex.getMessage());
            }
        }
        return "Tag re-sync complete";
    }
}
