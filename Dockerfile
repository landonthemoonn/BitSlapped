# Use Node 18 Alpine for smaller image size
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source files
COPY . .

# Build the app
RUN npm run build

# Install serve to serve the built static files
RUN npm install -g serve

# Expose port 8080 (Google Cloud Run expects this)
EXPOSE 8080

# Serve the dist folder on port 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
