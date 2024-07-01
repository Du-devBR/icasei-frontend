FROM nginx:alpine

# COPY dist/ /usr/share/nginx/html/
# COPY nginx.conf /etc/nginx/nginx.conf
# # COPY src/index.html /usr/share/nginx/html/
# # COPY src/css/ /usr/share/nginx/html/css
# COPY src /usr/share/nginx/html


# EXPOSE 80


FROM node:alpine as build
# WORKDIR /app
COPY tsconfig.json package.json ./
RUN npm install
COPY src/ ./src/
RUN npm run build
FROM nginx:alpine
COPY --from=build dist/ /usr/share/nginx/html/
COPY --from=build src/css/ /usr/share/nginx/html/css/
COPY --from=build src/index.html /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
