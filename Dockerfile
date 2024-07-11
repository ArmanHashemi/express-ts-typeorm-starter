# Use the official Node.js image as the base image
FROM node:18.1.0-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install TypeScript globally
RUN npm install -g typescript

# Build the TypeScript code
RUN npm run build

# Expose the application port
EXPOSE 3000

# Start the application
CMD ["node", "dist/index.js"]
