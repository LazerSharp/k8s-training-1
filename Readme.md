# Demo app - NodeJS

## Run node app
`cd k8s-demo-node-app`
`npm install`
`node index.js`

## Test node app

`curl http://localhost:8080`

# Docker

Docker Desktop [https://www.docker.com/products/docker-desktop]
Getting Started [https://docs.docker.com/get-started/]

## Create docker image

`docker build -t k8s-demo-node-app .`ß

## Push docker image to docker hub

`docker login`
`docker push email2barun/k8s-demo-node-app`

Docker image [https://hub.docker.com/r/email2barun/k8s-demo-node-app]

## Run docker image