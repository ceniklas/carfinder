FROM node:16-alpine AS builder

WORKDIR /usr/src/app
RUN npm install -g pnpm

COPY package*.json ./
COPY prisma ./prisma

RUN pnpm install
RUN pnpm run codegen

COPY . .
RUN pnpm run build

FROM node:16-alpine

COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/package.*json ./
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/build ./build
# COPY --from=builder /usr/src/app/init.sh ./

RUN pnpm install -g pnpm

EXPOSE 15432
RUN pnpm exec prisma db push --skip-generate
RUN pnpm exec prisma db seed --preview-feature
CMD ["node", "build/carApp.js"]  

# npx prisma db push --skip-generate
# npx prisma db seed --preview-feature
# node build/carApp.js
#CMD ["node", "build/carApp.js"]
