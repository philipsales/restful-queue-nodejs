
'use strict';

const resolvers = {
  Query: {
    Resident: (_, { id }, { dataSources }) => 
      dataSources.residentAPI.getResident(id),
    Residents: (_,  args , { dataSources }) => 
      dataSources.residentAPI.getResidents(args)
  },
  Mutation: {
    postResident: (_,  args , { dataSources }) => 
      dataSources.residentAPI.postResident(args),
    postResidents: (_,  args , { dataSources }) => 
      dataSources.residentAPI.postResidents(args),
    putResident: (_, args, { dataSources }) => 
      dataSources.residentAPI.putResident(args)
  }
}

module.exports = resolvers 