FROM node:latest
RUN mkdir -p /usr/src/gateway-graphql
WORKDIR /usr/src/gateway-graphql
COPY package*.json /usr/src/gateway-graphql/
# for couchbase dependencies

#RUN apk add --no-cache --virtual .gyp \
#        python \
#        make \
#        g++ \
#    && npm install --only=prod \
#    && apk del .gyp

#RUN apk --no-cache add --virtual native-deps \
#  g++ gcc libgcc libstdc++ linux-headers make python && \
#  npm install --quiet node-gyp -g &&\
#  npm install --quiet && \
#  apk del native-deps
RUN npm install prebuild
RUN npm install -g node-gyp 
RUN npm install couchbase --save
RUN npm install 
RUN npm cache clean --force
COPY . /usr/src/gateway-graphql
EXPOSE 4000 4001 4002 
CMD [ "npm", "run", "dev"]