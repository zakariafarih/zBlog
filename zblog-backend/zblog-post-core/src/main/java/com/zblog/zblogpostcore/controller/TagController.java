package com.zblog.zblogpostcore.controller;

import com.zblog.zblogpostcore.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/tags")
public class TagController {

    private final TagService tagService;

    @Autowired
    public TagController(TagService tagService) {
        this.tagService = tagService;
    }

    // GET /api/tags -> returns a list of tag names
    @GetMapping
    public List<String> getAllTags() {
        return tagService.listAllTags().stream()
                .map(tag -> tag.getName())
                .collect(Collectors.toList());
    }
}
