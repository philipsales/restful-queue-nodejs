'use strict';

//TODO: FIX ../../
require('../../../src/server/config/config');
const log = require('../../../src/server/lib/logger/logger');
const logger = log.logger.child({ sourceFile: log.file.setFilename(__filename) });

const { buildFederatedSchema } = require("@apollo/federation");
const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs/combine.gql'); 
const resolvers = require('./resolver');
const MessageAPI = require('./dataSources/message');

const dataSources = () => ({
  messageAPI: new MessageAPI()
});

const schema =  buildFederatedSchema([
  {
    typeDefs,
    resolvers
  }
])

const server = new ApolloServer({ 
    schema,
    dataSources,
    tracing: true,
    cacheControl: false,
    debug: true
});

if (process.env.NODE_ENV !== 'test'){
  server.listen({ port: 4002 }).then(({ url }) => {
    logger.info('🚀 message app server');
    console.log(`🚀 message app running at ${url}`);
  });
}

module.exports = { 
  dataSources,
  schema,
  MessageAPI 
}