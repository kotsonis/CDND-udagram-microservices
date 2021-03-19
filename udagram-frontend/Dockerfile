# Use NodeJS base image
FROM node:13

# Create app directory
WORKDIR /app

# Install app dependencies by copying
# package.json and package-lock.json
COPY package*.json /app/

# Install Ionic
RUN npm install -g ionic
# Install dependencies
RUN npm install

# Copy app source
COPY . /app/

RUN ionic build

#FROM nginx:alpine
#RUN rm -rf /usr/share/nginx/html/*
#COPY --from=build /app/www/ /usr/share/nginx/html/

# Bind the port that the image will run on
EXPOSE 8100

# Define the Docker image's behavior at runtime
CMD ["ionic", "serve", "--port=8100", "--address=0.0.0.0"]