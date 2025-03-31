FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY target/s3-core-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 8083
HEALTHCHECK --interval=30s --timeout=5s CMD curl -f http://localhost:8083/s3/health || exit 1
ENTRYPOINT ["java", "-jar", "app.jar"]
