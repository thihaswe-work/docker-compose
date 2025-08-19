# Use Node.js LTS
FROM node:20

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (avoid interactive prompts)
RUN npm install --legacy-peer-deps --no-audit --progress=false

# Copy all frontend files
COPY . .

# Expose the port Vite dev server will use
EXPOSE 3000

# Start Vite dev server and listen on all network interfaces
CMD ["npm", "run", "dev", "--", "--host"]
