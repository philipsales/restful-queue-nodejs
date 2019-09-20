'use strict';
//TODO: FIX ../../

//TODO: FIX ../../
const log = require('../../../src/server/lib/logger/logger');
const path = require('path');
//const log = path.join(__dirname, '../server/lib/logger/logger');

const logger = log.logger.child({ sourceFile: log.file.setFilename(__filename) });

const { buildFederatedSchema } = require("@apollo/federation");
const { ApolloServer } = require('apollo-server');

//TODO: initiate async merger then typdefs
//require('./merger'); 
const typeDefz = require('./typeDefs/typeDefs.gql'); 
const typeDefs = require('./typeDefs/typeDefs.gql.orig'); 

console.log('OOOOOOOOOOO-------',typeDefz)

async function firstFunction() {
  let result = new Promise((resolve) => {
    let foo = typeDefz.foobar
    resolve(foo);
  })
  let response = await result;
  console.log(response)
  return response;
};

let status = firstFunction();
console.log('FIRST _-------',status)

const resolvers = require('./resolver');
const ResidentAPI = require('./dataSources/resident');

const dataSources = () => ({
  residentAPI: new ResidentAPI()
});

const schema =  buildFederatedSchema([
  {
    typeDefs,
    //typeDefs,
    resolvers
  }
])

const server = new ApolloServer({ 
    schema,
    dataSources,
    tracing: true,
    introspection: true,
    cacheControl: false,
    debug: true,
});

if (process.env.NODE_ENV !== 'test'){
  server.listen({ port: 4001 }).then(({ url }) => {
    logger.info('🚀 initialize resident server');
    console.log(`🚀 resident app running at ${url}`);
  });
}

module.exports = { 
  dataSources,
  schema,
  ResidentAPI
}