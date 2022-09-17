FROM node:14-alpine AS builder

WORKDIR /usr/src/app
RUN npm install -g npm

COPY package*.json ./
COPY prisma ./prisma

RUN npm install
RUN npm run codegen

COPY . .
RUN npm run build

FROM node:14-alpine

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.*json ./
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/build ./build
COPY --from=builder /usr/src/app/init.sh ./

RUN npm install -g npm

EXPOSE 15432
CMD ["sh", "init.sh"]
#CMD ["node", "build/carApp.js"]
