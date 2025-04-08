# --------------- zblog-frontend (Next.js) Dockerfile ---------------

# --- Build stage ---
    FROM node:18-alpine as builder

    WORKDIR /app
    COPY package*.json ./
    RUN npm install
    
    # Copy all source code
    COPY . .
    # Build Next.js in production mode
    RUN npm run build
    
    # --- Run stage ---
    FROM node:18-alpine
    
    WORKDIR /app
    
    # Copy only what is necessary to run the built site
    COPY --from=builder /app/package*.json ./
    COPY --from=builder /app/node_modules ./node_modules
    COPY --from=builder /app/.next ./.next
    COPY --from=builder /app/public ./public 
    
    EXPOSE 3000
    CMD ["npm", "start"]
    