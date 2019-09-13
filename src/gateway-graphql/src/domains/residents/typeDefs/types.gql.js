const { gql } = require('apollo-server');
const { GraphQLDateTime } = require('graphql-iso-date');
const { GraphQLScalarType } = require('graphql');

/*
  type Mutation {
    postResident(input: CreateResidentInput!): MutateResponse!
    postResidents(input: [CreateResidentInput]): [MutateResponse!]!
    postUsers(input: [CreateResidentInput]): [MutateResponse!]!
    postPatients(input: [CreateResidentInput]): [MutateResponse!]!
    putResident(id: ID!
      input: UpdateResidentInput!): MutateResponse!
  }
*/

const GQLtypes = gql`

  scalar Date

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
    createResidents(input: [CreateResidentInput]): [MutateResponse!]!
    updateResident(id: ID!
      input: UpdateResidentInput!): MutateResponse!
  }

  type MutateResponse {
    id: ID
  }
  input PersonFilter {
    type: [DocumentType]!
    organization: String
    createdBy: String
    Last_Name: String
    First_Name: String
    Middle_Name: String
    dateCreated: Date 
    DoB: String
    dateCreatedRange: DateRange
  }

  type PersonResource {
    identifier: Identifier
    name: HumanName
    telecom: [ContactPoint]
    gender: Gender
    birthDate: Date
    address: [Address]
    managingOrganization: Organization
  }

  type Person {
    domainResource: PersonResource
    _document: _DocumentMeta
  }

  type Resident {
    identifier: Identifier
    name: HumanName
    telecom: ContactPoint
    gender: Gender
    birthDate: Date
    address: Address
    managingOrganization: Organization
    _document: _DocumentMeta
  }

  input IdentifierInput {
    value: String
    type: String
  }

  type Identifier {
    value: String
    type: String
  }

  input HumanNameInput {
    firstName: String
    lastName: String
    middleName: String
    suffix: String
  }

  type HumanName {
    firstName: String
    lastName: String
    middleName: String
    suffix: String
  }

  input ContactPointInput {
    system: ContactPointType
    value: String
    use: String
    code: String
  }

  type ContactPoint {
    system: ContactPointType
    value: String
    use: String
    code: String
  }

  input AddressInput  {
    type: AddressType
    text: String
    line: String 
    street: String
    city: String
    district: String
    state: String
    postalCode: String
    country: String
  }

  type Address {
    type: AddressType
    text: String
    line: String 
    street: String
    city: String
    district: String
    state: String
    postalCode: String
    country: String
  }

  input OrganizationInput {
    name: String
    type: OrganizationType
  }

  type Organization {
    name: String
    type: OrganizationType
  }

  type _PersonMeta { 
    _id: ID
    createdBy: String
    organization: String
    type: DocumentType!
    personType: [PersonType]!
    dateCreated: Date
  }

  type _DocumentMeta {
    createdBy: String!
    organization: String!
    type: DocumentType!
    dateCreated: Date!
  }

  input _DocumentMetaInput {
    _id: ID
    createdBy: String!
    organization: String!
    type: DocumentType!
    dateCreated: Date!
  }

  input CreatePersonInput {
    resident: PersonResourceInput
    _document: _DocumentMetaInput!
  }

  input CreateResidentInput {
    domainResource: PersonResourceInput!
    _document: _DocumentMetaInput!
  }

  input UpdateResidentInput {
    domainResource: PersonResourceInput!
    _document: _DocumentMetaInput!
  }

  input PersonResourceInput {
    identifier: IdentifierInput
    name: HumanNameInput
    telecom: [ContactPointInput]
    gender: Gender 
    birthDate: Date
    address: [AddressInput]
    managingOrganization: OrganizationInput
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

  enum DocumentType {
    profile
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

  enum Gender {
    M
    F
  }

  enum PersonType {
    patient
    resident
    cam
    user
  }

  enum ContactPointType {
    emailAddress
    cellphoneNumber
  }

  enum OrganizationType {
    RHU
    private
    public
  }

  enum AddressType {
    physical
    postal
    both
  }


`;

module.exports = GQLtypes;
