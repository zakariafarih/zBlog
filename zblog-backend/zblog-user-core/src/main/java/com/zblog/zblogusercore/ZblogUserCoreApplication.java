package com.zblog.zblogusercore;

import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {
        "com.zblog.zblogusercore",
        "com.zblog.s3core"
})
public class ZblogUserCoreApplication {

    public static void main(String[] args) {
        // optional .env loading if you use dotenv
        Dotenv dotenv = Dotenv.configure().ignoreIfMissing().load();
        dotenv.entries().forEach(entry ->
                System.setProperty(entry.getKey(), entry.getValue())
        );

        SpringApplication.run(ZblogUserCoreApplication.class, args);
    }
}
