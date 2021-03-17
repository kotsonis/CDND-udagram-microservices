# Use NodeJS base image
FROM node:13

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm install
RUN npm install -g typescript
# copy source code
COPY ./src ./src/
COPY .npmrc ./
# build the source
RUN npm run build

# Copy app source
COPY ./www .

# Bind the port that the image will run on
EXPOSE 8090

# Define the Docker image's behavior at runtime
CMD ["node", "./www/server.js"]