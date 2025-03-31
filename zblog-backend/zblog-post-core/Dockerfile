FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY target/zblog-post-core-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8081
HEALTHCHECK --interval=30s --timeout=5s CMD curl -f http://localhost:8081/post/health || exit 1
ENTRYPOINT ["java", "-jar", "app.jar"]
