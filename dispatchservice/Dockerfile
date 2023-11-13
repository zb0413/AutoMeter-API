FROM openjdk:8
USER root
WORKDIR /home/dispatchservice
COPY target/dispatchservice.jar dispatchservice.jar
COPY src/main/resources/application.yml application.yml
ENV JAVA_TOOL_OPTIONS="-Xms256m -Xmx256m -Djava.security.egd=file:/dev/./urandom"
EXPOSE 8082
ENTRYPOINT java -jar $JAVA_TOOL_OPTIONS dispatchservice.jar --spring.config.location=application.yml --spring.profiles.active=prod