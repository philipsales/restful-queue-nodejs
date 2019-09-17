const { gql } = require('apollo-server');

const GQLtypes = gql`


  type Query {
      Person(id: ID!): Person 
      Persons(
        filter: PersonFilter!
        orderBy: PersonOrderBy
        offset: Int
        limit: Int!
        ): [Person!]!
    }

  type Mutation {
    createResidents(
      input: [CreateResidentInput]): [MutateResponse!]!
    updateResident(id: ID!
      input: UpdateResidentInput!): MutateResponse!
  }
`;

module.exports = GQLtypes;
