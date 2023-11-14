FROM maven:3.8.6-openjdk-8-slim AS build

WORKDIR /AutoMeter-API
COPY .. .
RUN mvn clean package

# Stage 2: Create a minimal JRE image with OpenJDK 8
FROM openjdk:8-jre-slim
WORKDIR /home/dispatchservice
COPY --from=build /AutoMeter-API/target/dispatchservice.jar .
COPY src/main/resources/application.yml application.yml
ENV JAVA_TOOL_OPTIONS="-Xms256m -Xmx256m -Djava.security.egd=file:/dev/./urandom"
EXPOSE 8082
ENTRYPOINT java -jar $JAVA_TOOL_OPTIONS dispatchservice.jar --spring.config.location=application.yml --spring.profiles.active=prod
