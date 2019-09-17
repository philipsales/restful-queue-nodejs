const { gql } = require('apollo-server');

const GQLqueryTest = gql`

    type Query {
        Person(id: ID!): Person 
        Persons(
            filter: PersonFilter!
            orderBy: PersonOrderBy
            offset: Int
            limit: Int!
            ): [Person!]!
    }
 
`;

module.exports = GQLqueryTest;
