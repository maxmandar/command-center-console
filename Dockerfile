# Use the Node 18 image from DockerHub
FROM node:18

# Set the working directory in the Docker container
WORKDIR /app

# Copy package.json and package-lock.json before other files for optimized caching
COPY package*.json ./

# Install Angular CLI and node packages
RUN npm install -g @angular/cli && npm install

# Copy the rest of the application
COPY . .

# Start the Angular development server
CMD ["ng", "serve", "--host", "0.0.0.0", "--port", "4200", "--disable-host-check"]
