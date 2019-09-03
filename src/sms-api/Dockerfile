FROM node:alpine
RUN mkdir -p /usr/src/sms-api
WORKDIR /usr/src/sms-api
COPY package.json /usr/src/sms-api/
RUN npm install --only=prod
RUN npm cache clean --force
COPY . /usr/src/sms-api
EXPOSE 3003
CMD [ "node", "server/server.js" ]