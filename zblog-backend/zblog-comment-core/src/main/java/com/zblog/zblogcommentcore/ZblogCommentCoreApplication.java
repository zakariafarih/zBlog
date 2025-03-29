package com.zblog.zblogcommentcore;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
        "com.zblog.zblogcommentcore",
        "com.zblog.zblogpostcore"
})
public class ZblogCommentCoreApplication {

    public static void main(String[] args) {
        // Load .env if using dotenv
        Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
        dotenv.entries().forEach(entry ->
                System.setProperty(entry.getKey(), entry.getValue())
        );

        SpringApplication.run(ZblogCommentCoreApplication.class, args);
    }

}
