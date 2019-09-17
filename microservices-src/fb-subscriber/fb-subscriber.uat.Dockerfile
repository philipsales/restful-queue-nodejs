FROM node:alpine
RUN mkdir -p /usr/src/fb-subscriber
WORKDIR /usr/src/fb-subscriber
COPY package.json /usr/src/fb-subscriber/
RUN npm install --only=prod
RUN npm cache clean --force
COPY . /usr/src/fb-subscriber
EXPOSE 3001
CMD [ "node", "server/worker-fb.js" ]