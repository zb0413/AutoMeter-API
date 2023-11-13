FROM maven:3.8.6-openjdk-8-slim AS build
WORKDIR /builder
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Create a minimal JRE image with OpenJDK 8
FROM openjdk:8-jre-slim
WORKDIR /home/mockservice
COPY --from=build /builder/target/mockservice.jar .
COPY src/main/resources/application.yml application.yml
ENV JAVA_TOOL_OPTIONS="-Xms256m -Xmx256m -Djava.security.egd=file:/dev/./urandom"
EXPOSE 8080
ENTRYPOINT java -jar $JAVA_TOOL_OPTIONS mockservice.jar --spring.config.location=application.yml --spring.profiles.active=prod
