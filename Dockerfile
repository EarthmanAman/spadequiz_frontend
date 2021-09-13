FROM node:15.13-alpine
WORKDIR /spadequiz_frontend

COPY . .
RUN npm run build