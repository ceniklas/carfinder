#!/usr/bin/env bash

read -sp 'Password: ' passvar

POSTGRES_PASSWORD=${passvar}
POSTGRES_USER="prisma"
POSTGRES_DB="carfinderdb"
POSTGRES_PORT=5432
DATABASE_HOST="postgres"
DATABASE_URL="postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${DATABASE_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}?schema=public"
SERVER_PORT=1337

echo "POSTGRES_PASSWORD=${POSTGRES_PASSWORD}" > .env
echo "POSTGRES_USER=${POSTGRES_USER}" >> .env
echo "POSTGRES_DB=${POSTGRES_DB}" >> .env
echo "DATABASE_URL=${DATABASE_URL}" >> .env
echo "SERVER_PORT=${SERVER_PORT}" >> .env
