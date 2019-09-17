const { gql } = require('apollo-server');

const GQLmutation = gql`

  type Mutation {
    createResidents(
      input: [CreateResidentInput]): [MutateResponse!]!
    updateResident(id: ID!
      input: UpdateResidentInput!): MutateResponse!
  }

 
`;

module.exports = GQLmutation;
