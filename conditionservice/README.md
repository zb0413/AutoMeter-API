
# Stage 1: Build with Maven
FROM maven:3.6.3-openjdk-8-slim AS build
WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn package -DskipTests

# Stage 2: Create a minimal JRE image with OpenJDK 8
FROM openjdk:8-jre-slim
WORKDIR /app
COPY --from=build /app/target/your-application.jar .

# Set any necessary environment variables
ENV JAVA_OPTS=""

# Expose any necessary ports
EXPOSE 8080

# Start the application
CMD ["java", "-jar", "your-application.jar"]