FROM node:alpine
RUN mkdir -p /usr/src/fb-api
WORKDIR /usr/src/fb-api
COPY package.json /usr/src/fb-api/
RUN npm install --only=prod
RUN npm cache clean --force
COPY . /usr/src/fb-api
EXPOSE 3001
CMD [ "node", "server/server.js" ]