FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --silent
ADD build .
EXPOSE 15432
CMD ["node", "carApp.js"]
