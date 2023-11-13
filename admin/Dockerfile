FROM node:18.18.2-slim AS build
WORKDIR /builder
COPY . .
RUN npm install
RUN npm run prod



FROM nginx:latest
COPY --from=builder /builder/dist/ /usr/share/nginx/html
EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]


