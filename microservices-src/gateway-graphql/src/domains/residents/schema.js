'use strict';

const query = require('./typeDefs/query.gql')
const mutation = require('./typeDefs/mutation.gql')

const combine = {...query, ...mutation}


module.exports = { combine }