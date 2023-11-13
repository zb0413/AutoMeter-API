#FROM node:18.18.2-slim AS build
FROM node:14.21.3-bullseye AS build
WORKDIR /builder
#RUN apt update && apt install python
COPY . .
RUN npm install
RUN npm run build



FROM nginx:latest
COPY --from=build /builder/dist/ /usr/share/nginx/html
EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]


