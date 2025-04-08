# --------------- zblog-user-core Dockerfile ---------------
# Minimal image for running a Spring Boot jar
FROM eclipse-temurin:21-jre-alpine

# Create a non-root user (optional but recommended)
RUN addgroup -S zblog && adduser -S zblog -G zblog

WORKDIR /app
COPY target/*.jar /app/user-core.jar

# Use the non-root user
USER zblog

EXPOSE 8092
# If you rely on environment variables from .env (through docker-compose),
# you do NOT necessarily need to copy .env inside the container.
CMD ["java", "-jar", "/app/user-core.jar"]
