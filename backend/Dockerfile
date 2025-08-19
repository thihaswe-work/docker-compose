# Use lightweight Node.js LTS image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package.json and package-lock.json first
COPY package*.json ./

# Install dependencies (faster with flags)
RUN npm install --legacy-peer-deps --no-audit --progress=false

# Copy the rest of the backend files
COPY . .

# Expose backend port
EXPOSE 5000

# Start the app
CMD ["npm", "start"]
