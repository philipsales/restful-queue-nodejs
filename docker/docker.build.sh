#!/bin/bash

VERSION=latest
ENV=dev
DOCKER_REGISTRY=peejayaccts
SOURCE_DIR='/Users/ghost/src/github/notifications-pipeline/microservices-src'
#CACHE='--no-cache'
CACHE=''

#use dockerfile context

echo "---DOCKER BUILD SMS-API---"
cd $SOURCE_DIR/sms-api
docker build $CACHE -f sms-api.$ENV.Dockerfile -t $DOCKER_REGISTRY/sms-api:$VERSION . 

echo "---DOCKER BUILD EMAIL-API----"
cd $SOURCE_DIR/email-api
docker build $CACHE -f email-api.$ENV.Dockerfile -t $DOCKER_REGISTRY/email-api:$VERSION . 

echo "---DOCKER BUILD FB-API----"
cd $SOURCE_DIR/fb-api
docker build $CACHE -f fb-api.$ENV.Dockerfile -t $DOCKER_REGISTRY/fb-api:$VERSION . 

echo "---DOCKER BUILD GATEWAY-GRAPHQL----"
#cd $SOURCE_DIR/gateway-graphql
#docker build $CACHE -f gateway-gql.$ENV.Dockerfile -t $DOCKER_REGISTRY/gateway-gql:$VERSION . 

echo "---DOCKER BUILD SMS-SUBSCRIBER----"
cd $SOURCE_DIR/sms-subscriber
docker build $CACHE -f sms-subscriber.$ENV.Dockerfile -t $DOCKER_REGISTRY/sms-subscriber:$VERSION . 

echo "---DOCKER BUILD EMAIL-SUBSCRIBER----"
cd $SOURCE_DIR/email-subscriber
docker build $CACHE -f email-subscriber.$ENV.Dockerfile -t $DOCKER_REGISTRY/email-subscriber:$VERSION . 

echo "---DOCKER BUILD FB-SUBSCRIBER----"
cd $SOURCE_DIR/fb-subscriber
docker build $CACHE -f fb-subscriber.$ENV.Dockerfile -t $DOCKER_REGISTRY/fb-subscriber:$VERSION . 


#clean previous images
docker system prune --force