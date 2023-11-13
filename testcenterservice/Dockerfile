FROM openjdk:8
USER root
WORKDIR /home/testcenterservice
COPY target/testcenterservice.jar testcenterservice.jar
COPY src/main/resources/application.yml application.yml
ENV JAVA_TOOL_OPTIONS="-Xms256m -Xmx256m -Djava.security.egd=file:/dev/./urandom"
EXPOSE 8080
ENTRYPOINT java -jar $JAVA_TOOL_OPTIONS testcenterservice.jar --spring.config.location=application.yml --spring.profiles.active=prod
