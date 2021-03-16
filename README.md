# Udagram Image Filtering Application - Udacity Cloud Developer Nanodegree Project
## 16.Mar.2021 : Stefanos Kotsonis

## Description
This project is is for the [Udacity Cloud Developer Nanodegree](https://www.udacity.com/course/cloud-developer-nanodegree--nd9990), and specifically course 3 **Monolith to Microservices at Scale**. In this course we learn best practices on how to develop and deploy microservices, with a focus on different microservice architecture patterns, independent scaling, resiliency, securing microservices, and best practices for monitoring and logging.

The task is to refactor monolith application to microservices and deploy through [AWS EKS]()
In this project, we  take an existing application named Udagram and refactor it into a microservice architecture with lean services. We build out a CI/CD process using [Travis CI](https://travis-ci.org/) that automatically builds and deploys Docker images to a Kubernetes cluster. The Kubernetes cluster is configured to help solve common challenges related to scale and security.

# Udagram description

Udagram is a simple cloud application developed alongside the Udacity Cloud Engineering Nanodegree. It allows users to register and log into a web client, post photos to the feed, and process photos using an image filtering microservice.

## Project Challenge
Following tasks will have to be performed.
1. **Refactor the API** : Decompose the API code so that we can have two separate projects that can be run independent of one another.
2. **Containerize the Code** : Creating Dockerfiles for the frontend and backend applications. Each project should have its own Dockerfile.
3. **Build CICD Pipeline** : Integrate the GitHub repository with Travis CI, and create a build pipeline that will push the generated images on [DockerHub](https://hub.docker.com/).
4. **Deploy to Kubernetes** : Deploy the Docker containers for the API applications and web application as their own pods in AWS EKS.
5. **Implement Logging** : Define a logging strategy and use logs to capture metrics. As the k8s will be set up with autoscale, it is important our logging strategy allows us to segregate events from different pods.

# Solution
The following was implemented as a solution to the project challenge.
## Architecture

The project consists of the following microservices:
1. `udagram-frontend` Frontend - Angular web application built with Ionic Framework
2. `udagram-reverseproxy` Reverse Proxy - [Nginx](https://www.nginx.com/) Reverse Proxy to relay requests to internal microservices
3. `udagram-api-feed` Backend RESTful API for posting and processing photos to the feed - Node-Express application
4. `udagram-api-users` Backend RESTful API for handling user login and authentication - Node-Express application

The cloud resources being used for this project consists of:
1. [Amazon S3](https://aws.amazon.com/s3/) Object storage service used for storing the uploaded pictures.
2. [Amazon RDS](https://aws.amazon.com/rds/) Relational database service used for hosting a PostgreSQL database which contains the feeds and users
3. [Amazon EKS](https://aws.amazon.com/eks/) Elastic Kubernetes Service to start, run, and scale Kubernetes applications in the AWS cloud

### Prerequisite
1. The depends on the Node Package Manager (NPM). You will need to download and install Node from [https://nodejs.com/en/download](https://nodejs.org/en/download/). This will allow you to be able to run `npm` commands.
2. Environment variables will need to be set. These environment variables include database connection details that should not be hard-coded into the application code.
#### Handling Secrets

### Database
A PostgreSQL database was created on AWS RDS. The following secrets are retrieved by [config.ts](udagram-api-users/src/config/config.ts) from the environment when running:
```typescript
"username": process.env.POSTGRES_USERNAME,
"password": process.env.POSTGRES_PASSWD,
"database": process.env.POSTGRES_DATABASE,
"host": process.env.AWS_HOST
```
### S3
Create an AWS S3 bucket. Set the config values for environment variables prefixed with `AWS_` in `set_env.sh`.

### Backend API


### Frontend App

