package com.zblog.zblogusercore.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user/health")
public class HealthCheckController {

    @GetMapping
    public String health() {
        return "OK";
    }
}
