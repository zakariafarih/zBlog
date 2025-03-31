package com.zblog.zblogcommentcore.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/comment/health")
public class HealthCheckController {

    @GetMapping
    public String health() {
        return "OK";
    }
}
