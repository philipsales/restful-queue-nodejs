const { gql } = require('apollo-server');

const typeDefs = gql`

  type Query {
    Messages: [Message!]! 
    Message(messageCode: String!): Message!
  }

  type Message {
    messageCode: NotifcationCode 
    messageContent: String
    lang: String
    channelType: String
  }

  enum NotifcationCode {
    dispergo_accepted
    dispergo_pending
    dispergo_rejected
    dispergo_dispatched
    dispergo_received
    dispergo_delivered
    dispergo_not_delivered
    appointment_duedate_today
    appointment_duedate_tomorrow
    appointment_rejected
  }
  
`;

module.exports = typeDefs;
