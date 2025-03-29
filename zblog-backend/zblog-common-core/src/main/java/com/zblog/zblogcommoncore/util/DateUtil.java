package com.zblog.zblogcommoncore.util;

import java.time.Instant;
import java.time.ZoneOffset;
import java.time.format.DateTimeFormatter;

public class DateUtil {
    public static final DateTimeFormatter FORMATTER = DateTimeFormatter
            .ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
            .withZone(ZoneOffset.UTC);

    public static String format(Instant instant) {
        return FORMATTER.format(instant);
    }

    public static Instant now() {
        return Instant.now();
    }
}
