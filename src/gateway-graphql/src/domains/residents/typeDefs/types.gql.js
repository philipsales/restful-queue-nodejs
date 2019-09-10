const { gql } = require('apollo-server');
const { GraphQLDateTime } = require('graphql-iso-date');
const { GraphQLScalarType } = require('graphql');


const GQLtypes = gql`

  scalar Date

  type Query {
      Resident(id: ID!): Resident
      Residents(
        filter: PersonFilter!
        orderBy: PersonOrderBy
        offset: Int
        limit: Int!
        ): [Resident!]!
    }

  type Mutation {
    postResident(input: CreateResidentInput!): MutateResponse!
    postResidents(input: [CreateResidentInput]): [MutateResponse!]!
    putResident(id: ID!
      input: UpdateResidentInput!): MutateResponse!
  }

  type MutateResponse {
    id: ID
  }

  input PersonFilter {
    organization: String
    createdBy: String
    Last_Name: String
    First_Name: String
    Middle_Name: String
    dateCreated: Date 
    DoB: String
    dateRange: DateRange
  }

  type Resident {
    personalInformation: PersonalInformation 
    address: Address
    contactDetail: ContactDetail
    identificationCard: IdentificationCard
    _residentMeta: _ResidentMeta
  }

  type PersonalInformation {
    consentGiven: String
    DoB: Date 
    First_Name: String
    Gender: String
    Last_Name: String
    Middle_Name: String
    lastNameSuffix: String
  }

  type ContactDetail {
    cellphoneNumber: String
    emailAddress: String
  }

  type Address {
    countryCode: String
    countryName: String
    Address_1: String
    Address_2: String
    postalCode: String
    provinceCity: String
  }

  type IdentificationCard {
    additionalIdentificationType: String
    additionalIdentificationValue: String
    poorCardHas: String
    poorCardNumber: String
    poorCardReason: String
  }

  type _ResidentMeta { 
    createdBy: String
    organization: String
    type: String
    dateCreated: Date
  }

  input _ResidentMetaInput {
    createdBy: String!
    organization: String!
    type: String!
    dateCreated: Date!
  }

  input CreateResidentInput {
    _residentMeta: _ResidentMetaInput!
    resident: ResidentInput!
  }

  input UpdateResidentInput {
    _residentMeta: _ResidentMetaInput!
    resident: ResidentInput!
  }

  input ResidentInput {
    Address_1: String
    Address_2: String
    consentGiven: String
    DoB: Date 
    First_Name: String
    Gender: String
    Last_Name: String
    Middle_Name: String
    additionalIdentificationType: String
    additionalIdentificationValue: String
    cellphoneNumber: String
    countryCode: String
    countryName: String
    emailAddress: String
    lastNameSuffix: String
    poorCardHas: String
    poorCardNumber: String
    poorCardReason: String
    postalCode: String
    provinceCity: String
  }

  input DateRange {
    dateName: DateName
    dateFrom: Date
    dateTo: Date
  }

  enum DateName {
    dateCreated
    DoB
  }

  enum PersonOrderBy {
    Last_Name_ASC
    Last_Name_DESC
    DoB_ASC 
    DoB_DESC
    Gender_ASC
    Gender_DESC
    createdBy_ASC
    createdBy_DESC
    organization_ASC
    organization_DESC
    provinceCity_ASC
    provinceCity_DESC
    address_1_ASC
    address_1_DESC
  }


`;

module.exports = GQLtypes;
