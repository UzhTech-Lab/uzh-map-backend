# 1. Base image with Node.js
FROM node:18-alpine AS builder

# 2. Working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json (if present)
COPY package*.json ./

# 4. Install dependencies
RUN npm install

# 5. Copy the rest of the code
COPY . .

# 6. Build the project
RUN npm run build

# --- final stage ---
FROM node:18-alpine

WORKDIR /app
# Copy only necessary artifacts
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Set environment variable if needed
ENV NODE_ENV=production

# Expose port (by default Nest listens on 3000)
EXPOSE 5000

# Start command
CMD ["node", "dist/main.js"]
