FROM node:8.9
RUN mkdir -p /usr/src/gateway_api
RUN apt-get update
WORKDIR /usr/src/gateway_api
COPY package.json /usr/src/gateway_api/
COPY package-lock.json /usr/src/gateway_api/
RUN npm install
COPY . /usr/src/gateway_api
EXPOSE 3001
CMD ["npm run dev"]