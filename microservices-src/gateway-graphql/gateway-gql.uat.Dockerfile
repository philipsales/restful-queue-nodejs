FROM node:alpine
RUN mkdir -p /usr/src/gateway-graphql
WORKDIR /usr/src/gateway-graphql
COPY package*.json /usr/src/gateway-graphql/
# for couchbase dependencies

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install --only=prod \
    && apk del .gyp
RUN npm cache clean --force
COPY . /usr/src/gateway-graphql
EXPOSE 4000 4001 4002 
CMD [ "npm", "run", "uat"]