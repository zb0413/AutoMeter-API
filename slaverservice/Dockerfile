FROM maven:3.8.6-openjdk-8-slim AS build
WORKDIR /builder
COPY pom.xml .
RUN mvn dependency:go-offline
COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Create a minimal JRE image with OpenJDK 8
FROM openjdk:8-jre-slim
WORKDIR /home/slaverservice
COPY --from=build /builder/target/slaverservice.jar .
COPY src/main/resources/application.yml application.yml
ENV JAVA_TOOL_OPTIONS="-Xms256m -Xmx256m -Djava.security.egd=file:/dev/./urandom"

COPY ./apache-jmeter-5.3 apache-jmeter-5.3
COPY ./servicejmxcase servicejmxcase
RUN chmod 777 /home/slaverservice/apache-jmeter-5.3/bin/jmeter

EXPOSE 8081
ENTRYPOINT java -jar $JAVA_TOOL_OPTIONS slaverservice.jar --spring.config.location=application.yml --spring.profiles.active=prod
