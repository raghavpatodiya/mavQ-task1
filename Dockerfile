# Dockerfile for API Server

# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY src/package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY src .

# Expose the port that your API server will listen on
EXPOSE 8080

# Start the API server
CMD ["node", "server.js"]
