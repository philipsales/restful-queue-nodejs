FROM node:alpine
RUN mkdir -p /usr/src/email-api
WORKDIR /usr/src/email-api
COPY package*.json /usr/src/email-api/
RUN npm install --only=prod
RUN npm audit fix --force
RUN npm cache clean --force
COPY . /usr/src/email-api
EXPOSE 3002
CMD [ "npm", "run", "dev" ]