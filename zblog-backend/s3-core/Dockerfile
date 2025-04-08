# --------------- s3-core Dockerfile ---------------
    FROM eclipse-temurin:21-jre-alpine

    RUN addgroup -S zblog && adduser -S zblog -G zblog
    
    WORKDIR /app
    COPY target/*.jar /app/s3-core.jar
    
    USER zblog
    
    EXPOSE 8083
    CMD ["java", "-jar", "/app/s3-core.jar"]
    