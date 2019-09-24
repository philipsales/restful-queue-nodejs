#!/bin/bash

#UAT
ln -s ../microservices-src/sms-api/sms-api.uat.Dockerfile 
ln -s ../microservices-src/email-api/email-api.uat.Dockerfile 
ln -s ../microservices-src/fb-api/fb-api.uat.Dockerfile 

ln -s ../microservices-src/sms-subscriber/sms-subscriber.uat.Dockerfile 
ln -s ../microservices-src/email-subscriber/email-subscriber.uat.Dockerfile 
ln -s ../microservices-src/fb-subscriber/fb-subscriber.uat.Dockerfile 

#DEV
ln -s ../microservices-src/sms-api/sms-api.dev.Dockerfile 
ln -s ../microservices-src/email-api/email-api.dev.Dockerfile 
ln -s ../microservices-src/fb-api/fb-api.dev.Dockerfile 

ln -s ../microservices-src/sms-subscriber/sms-subscriber.dev.Dockerfile 
ln -s ../microservices-src/email-subscriber/email-subscriber.dev.Dockerfile 
ln -s ../microservices-src/fb-subscriber/fb-subscriber.dev.Dockerfile 
