# npm install
# npm run docker:cleanup && npm run build:docker
# docker run --name car_finder --env-file .env carfinder_image


# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#using-environment-variables

# Prisma supports the native connection string format for PostgreSQL, MySQL and SQLite.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="postgresql://postgres:<pass>@localhost:5432/carfinderdb?schema=public"


# docker run --name car-finder -p 5432:5432 -e POSTGRES_PASSWORD=<pass> -d postgres
# yarn prisma migrate deploy
# docker exec -it car-finder bash
# psql -h localhost -p 5432 -U postgres -d postgres