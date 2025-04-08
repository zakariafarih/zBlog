# --------------- zblog-post-core Dockerfile ---------------
    FROM eclipse-temurin:21-jre-alpine

    RUN addgroup -S zblog && adduser -S zblog -G zblog
    
    WORKDIR /app
    COPY target/*.jar /app/post-core.jar
    
    USER zblog
    
    EXPOSE 8081
    CMD ["java", "-jar", "/app/post-core.jar"]
    