# Build stage
FROM node:18-slim AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the code
COPY . .

# Set the homepage
RUN sed -i 's#"homepage": ".*"#"homepage": "/zeta/"#g' package.json

# Build the app
RUN npm run build

# Production stage
FROM node:18-slim

WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy build from the 'build' stage
COPY --from=build /app/build ./build

# Start the app
CMD ["serve", "-s", "build", "-l", "3000"]