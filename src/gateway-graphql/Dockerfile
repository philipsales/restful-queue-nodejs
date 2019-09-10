FROM node:alpine
RUN mkdir -p /usr/src/graphql-apollo-federated
WORKDIR /usr/src/graphql-apollo-federated
COPY package.json /usr/src/graphql-apollo-federated/
RUN npm install --only=prod
RUN npm cache clean --force
COPY . /usr/src/graphql-apollo-federated
EXPOSE 3002
CMD ["npm run dev"]