#!/bin/bash

cd ../microservices-src/sms-api/
docker build -f sms-api.uat.Dockerfile . --no-cache -t peejayaccts/sms-api:1.0.0-alpha

cd ../microservices-src/email-api/
docker build -f email-api.uat.Dockerfile . --no-cache -t peejayaccts/email-api:1.0.0-alpha

cd ../microservices-src/sms-subscriber/
docker build -f sms-subscriber.uat.Dockerfile . --no-cache -t peejayaccts/sms-api:1.0.0-alpha

cd ../microservices-src/email-subscriber/
docker build -f email-subscriber.uat.Dockerfile . --no-cache -t peejayaccts/sms-api:1.0.0-alpha