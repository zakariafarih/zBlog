package com.zblog.zblogpostcore;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
        "com.zblog.zblogpostcore",
        "com.zblog.s3core"
})
public class ZblogPostCoreApplication {

    public static void main(String[] args) {
        // Load .env
        Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
        dotenv.entries().forEach(entry ->
                System.setProperty(entry.getKey(), entry.getValue())
        );

        SpringApplication.run(ZblogPostCoreApplication.class, args);
    }
}
