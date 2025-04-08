# --------------- zblog-comment-core Dockerfile ---------------
    FROM eclipse-temurin:21-jre-alpine

    RUN addgroup -S zblog && adduser -S zblog -G zblog
    
    WORKDIR /app
    COPY target/*.jar /app/comment-core.jar
    
    USER zblog
    
    EXPOSE 8282
    CMD ["java", "-jar", "/app/comment-core.jar"]
    