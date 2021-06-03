FROM node:14-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY package*.json ./
COPY schema.prisma ./
RUN npm install
ADD build ./build
EXPOSE 15432
CMD ["node", "build/carApp.js"]
