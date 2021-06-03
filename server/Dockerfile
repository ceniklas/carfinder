FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY .env ./
RUN npm install -g npm 
COPY package*.json ./
RUN npm install 
COPY prisma/schema.prisma ./
RUN npm run codegen
ADD build ./build
EXPOSE 15432
CMD ["node", "build/carApp.js"]
