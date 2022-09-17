#!/usr/bin/env bash

npx prisma db push --skip-generate
npx prisma db seed --preview-feature
node build/carApp.js