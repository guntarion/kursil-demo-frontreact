# Use the official Node.js image from the Docker Hub
FROM node:18-slim

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install the required dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

COPY build ./build

# Build the React application
RUN npm run build

# Install a lightweight web server to serve the React application
RUN npm install -g serve

# Command to run the web server
CMD ["serve", "-s", "build", "-l", "3000"]