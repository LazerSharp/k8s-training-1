# Training Outline

* Create a simple NodeJS app
* Run the app locally using node 
* Run the app in docker
* Deploy the app in a Kubernetes cluster
    * Pod
    * Deployment
    * Service
    * Ingress 

# Demo app - NodeJS

Directory: k8s-demo-node-app

## Run node app
`cd k8s-demo-node-app`
`npm install`
`node index.js &`

## Test node app

`curl http://localhost:8080`

## Cleanup

`ps`
`kill [node-app-PID]`

# Docker (A container runtime)

Docker is an open source platform for building, deploying, and managing containerized applications.


Overview [https://docs.docker.com/get-started/overview/]
Docker Concepts [https://www.section.io/engineering-education/docker-concepts/]

## Virtualization

Virtualization is the technique of importing a Guest operating system on top of a Host operating system. This technique was a revelation at the beginning because it allowed developers to run many operating systems in different virtual machines, all running on the same host. These eliminated the need for extra hardware resources.

## Containerization

* Containerization is a form of operating system virtualization
* Containers share same karnel (e.g. linux karnel)

## Architecture 

Docker Architecture [https://docs.docker.com/get-started/overview/#docker-architecture]
Docker Architecture Diagrem [https://docs.docker.com/engine/images/architecture.svg]

Install Docker Desktop [https://www.docker.com/products/docker-desktop]
Getting Started [https://docs.docker.com/get-started/]

## Create docker image

`docker build -t k8s-demo-node-app .`

## Push docker image to docker hub

`docker login`
`docker push email2barun/k8s-demo-node-app`

Docker image [https://hub.docker.com/r/email2barun/k8s-demo-node-app]

## Run docker image
`docker rm k8s-app`
`docker run --detach --publish 8080:8080 --name k8s-app email2barun/k8s-demo-node-app`

## Check the docker container

`docker ps`
`docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Image}}\t{{.Ports}}"`

## Test docker app

`curl http://localhost:8080`

## Clenup
`docker kill k8s-app`
`docker rm k8s-app`
`docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Image}}\t{{.Ports}}"`

# Kubernetes (K8s)

Kubernetes is open-source orchestration software for deploying, managing and scaling containers

## Concepts

* Worker Nodes (Compute) - A node is worker machine in Kubernets.
    * kubelet - An agent that runs on each node in the cluster. It makes sure that containers are running in a Pod.
    * kube-proxy - kube-proxy is a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept.

* Control Plane (Control Nodes) - The container orchestration layer that exposes the API and interfaces to define, deploy, and manage the lifecycle of containers.
    * kube-apiserver - exposes the Kubernetes API. Front end of Kubernetes control plane
    * etcd - Consistent and highly-available key value store used as Kubernetes' backing store for all cluster data.
    * kube-scheduler - Control plane component that watches for newly created Pods with no assigned node, and selects a node for them to run on.
    * kube-controller-manager - Control plane component that runs controller processes. Logically, each controller is a separate process, but to reduce complexity, they are all compiled into a single binary and run in a single process.

* Kubernetes API objects

    * Pod - A prd represents a set of runnibg containers in your cluster.

Components [https://kubernetes.io/docs/concepts/overview/components/]

## Install & Start Minikube

Minikube is local Kubernetes, focusing on making it easy to learn and develop for Kubernetes.

Getting Started [https://minikube.sigs.k8s.io/docs/start/]

`minikube start --vm=true`
`minikube status`

## Run pod
`cd k8s`
`apply -f pod.yaml`

## Port forward

`kubectl port-forward k8s-demo-node-app  8081:8080`

## Test

`curl http://localhost:8081`


## Delete pod

`kubectl delete pod  k8s-demo-node-app`

## Deployment

`apply -f deployment.yaml`

## Service 

`kubectl apply -f service.yaml`
`minikube service node-app-service --url`

## Ingress

`kubectl apply -f ingress.yaml`
`curl hello-world.info`



