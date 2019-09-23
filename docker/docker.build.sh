#!/bin/bash

VERSION=latest
DOCKER_REGISTRY=peejayaccts

#use dockerfile context
echo "cd $PATH/sms-api"
echo "docker build --no-cache -f sms-api.uat.Dockerfile -t $DOCKER_USER/sms-api:$VERSION . "

cd /Users/ghost/src/github/notifications-pipeline/microservices-src/sms-api
docker build --no-cache -f sms-api.uat.Dockerfile -t $DOCKER_REGISTRY/sms-api:$VERSION . 

echo "cd $PATH/sms-subscriber"
echo "docker build --no-cache -f sms-subscriber.uat.Dockerfile -t $DOCKER_USER/sms-subscriber:$VERSION . "

cd /Users/ghost/src/github/notifications-pipeline/microservices-src/sms-subscriber
docker build --no-cache -f sms-subscriber.uat.Dockerfile -t $DOCKER_REGISTRY/sms-subscriber:$VERSION . 


#clean previous images
docker system prune