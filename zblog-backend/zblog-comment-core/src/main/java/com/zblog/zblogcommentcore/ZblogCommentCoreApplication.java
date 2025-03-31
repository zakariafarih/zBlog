package com.zblog.zblogcommentcore;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class ZblogCommentCoreApplication {

    public static void main(String[] args) {

        SpringApplication.run(ZblogCommentCoreApplication.class, args);
    }

}
