FROM node:alpine
RUN mkdir -p /usr/src/sms-subscriber
WORKDIR /usr/src/sms-subscriber
COPY package.json /usr/src/sms-subscriber/
RUN npm install --only=prod
RUN npm cache clean --force
COPY . /usr/src/sms-subscriber
EXPOSE 3001
CMD [ "node", "server/worker-sms.js" ]