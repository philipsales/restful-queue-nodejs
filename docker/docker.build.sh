#!/bin/bash

cd ../src/sms-api/
docker build -f sms-api.uat.Dockerfile . --no-cache 

cd ../src/email-api/
docker build -f email-api.uat.Dockerfile . --no-cache 

cd ../src/sms-subscriber/
docker build -f sms-subscriber.uat.Dockerfile . --no-cache 

cd ../src/email-subscriber/
docker build -f email-subscriber.uat.Dockerfile . --no-cache 