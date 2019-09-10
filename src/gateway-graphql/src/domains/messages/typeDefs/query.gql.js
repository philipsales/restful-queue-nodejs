const { gql } = require('apollo-server');

typeDefs = gql`

  type Query {
    messages: [Message] 
  }
  
  
`;

module.exports = typeDefs;
