FROM node:lts-alpine
ENV NODE_ENV=production
ENV PORT=8081
WORKDIR /app
COPY . .
RUN npm install --silent
EXPOSE 8081
CMD ["node", "index.js"]
