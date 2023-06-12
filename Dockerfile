# Use a Node.js base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
# RUN npm install
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port on which your Node.js service listens
EXPOSE 3000

# Build the application
RUN npm run build

# Start the Node.js application
# CMD ["npm", "start"]
CMD npm run start:prod
