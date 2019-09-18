'use strict';

require('./src/server/config/config');

const log = require('./src/server/lib/logger/logger');
const logger = log.logger.child({ sourceFile: log.file.setFilename(__filename) });

const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
  serviceList: [
    { name: "messages", url: "http://localhost:4002/graphql" },
    { name: "residents", url: "http://localhost:4001/graphql" }
  ]
});

(async () => {
  const { schema, executor } = await gateway.load();

  const server = new ApolloServer({ 
      schema, 
      engine: {
        apiKey: process.env.APOLLO_ENGINE_KEY,
      },
      executor
    });

  server.listen({ port: 4000 }).then(({ url }) => {
    logger.info(`🚀 Gateway Server ready at ${url}`);
    console.log(`🚀 Gateway Server ready at ${url}`);
  });
})();
