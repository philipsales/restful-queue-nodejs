const { gql } = require('apollo-server');

const typeDefs = gql`
  type Message {
    messageCode: String
    messageContent: String
    lang: String
    channelType: String
  }
`;

module.exports = typeDefs;
