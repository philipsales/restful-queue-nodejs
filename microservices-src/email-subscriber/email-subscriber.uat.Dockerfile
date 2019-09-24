FROM node:alpine
RUN mkdir -p /usr/src/email-subscriber
WORKDIR /usr/src/email-subscriber
COPY package*.json /usr/src/email-subscriber/
RUN npm install --only=prod
RUN npm cache clean --force
COPY . /usr/src/email-subscriber
CMD [ "npm", "run", "uat" ]