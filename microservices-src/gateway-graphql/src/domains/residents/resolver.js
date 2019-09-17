
'use strict';

const resolvers = {
  Query: {
    Resident: (_, { id }, { dataSources }) => 
      dataSources.residentAPI.getResident(id),
    Residents: (_,  args , { dataSources }) => 
      dataSources.residentAPI.getResidents(args),
    Persons: (_,  args , { dataSources }) => 
      dataSources.residentAPI.getResidents(args),
    Person: (_, { id }, { dataSources }) => 
      dataSources.residentAPI.getResident(id),
  },
  Mutation: {
    postResident: (_,  args , { dataSources }) => 
      dataSources.residentAPI.postResident(args),
    createResidents: (_,  args , { dataSources }) => 
      dataSources.residentAPI.postResidents(args),
    updateResident: (_, args, { dataSources }) => 
      dataSources.residentAPI.putResident(args)
  }
}

module.exports = resolvers 