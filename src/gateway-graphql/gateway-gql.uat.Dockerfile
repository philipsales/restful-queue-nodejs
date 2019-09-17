FROM node:alpine
RUN mkdir -p /usr/src/gateway-graphql
WORKDIR /usr/src/gateway-graphql
COPY package.json /usr/src/gateway-graphql/
RUN npm install --only=prod
RUN npm cache clean --force
COPY . /usr/src/gateway-graphql
EXPOSE 3002
CMD ["npm run dev"]