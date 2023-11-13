FROM maven:3.8.6-openjdk-8-slim AS build
WORKDIR /builder
COPY pom.xml .
COPY src ./src
COPY lib ./lib
RUN mvn clean package

# Stage 2: Create a minimal JRE image with OpenJDK 8
FROM openjdk:8-jre-slim
WORKDIR /home/conditionservice
COPY --from=build /builder/target/conditionservice.jar .
COPY src/main/resources/application.yml application.yml
ENV JAVA_TOOL_OPTIONS="-Xms256m -Xmx256m -Djava.security.egd=file:/dev/./urandom"
EXPOSE 8083
ENTRYPOINT java -jar $JAVA_TOOL_OPTIONS conditionservice.jar --spring.config.location=application.yml --spring.profiles.active=prod