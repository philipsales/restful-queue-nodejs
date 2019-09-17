
'use strict';

const resolvers = {
  Query: {
    Messages: async (_, args, { dataSources }) =>
        dataSources.messageAPI.getMessages(args),
    Message: async (_, { messageCode }, { dataSources }) =>
        dataSources.messageAPI.getMessage(messageCode)
  }
}

module.exports = resolvers 