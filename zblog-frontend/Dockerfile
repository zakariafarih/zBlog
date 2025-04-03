# 1. Base image with node
FROM node:20-alpine AS deps
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# 2. Builder stage
FROM node:20-alpine AS builder
WORKDIR /app

# Copy node_modules and source code
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Copy .env to make NEXT_PUBLIC_ vars available at build time
COPY .env .env

# Build the app (Next.js embeds NEXT_PUBLIC_ variables here)
RUN npm run build

# 3. Runtime image
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

# Copy build output and runtime essentials
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

# Expose the port (Heroku will use $PORT env)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
