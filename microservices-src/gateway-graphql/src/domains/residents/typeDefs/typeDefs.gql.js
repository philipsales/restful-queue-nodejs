'use strict';

const { importSchema } = require('graphql-import');
const typeDefBuilders = require('../../../server/lib/typeDefBuilder');
const { gql } = require('apollo-server')
const path = require('path');

const firstFunction = async () => {
  console.log('first Function');
  const status = await typeDefBuilders.setTypeDef();
  console.log('firstfunction status',status)
  console.log('outside status', status);
  return status;
};

const secondFunction = async (status) => {
  
  console.log('SECOND FUNCTION',status);
  const typeDefPath = '../../residents/typeDefs';
  const outputPath =  path.join(__dirname, typeDefPath + '/typeDef.graphql');
  const typeDef = importSchema(outputPath);

  const GQLSchema = gql`
    ${typeDef}
  `;
  return GQLSchema; 
  /*
  const typeDef = await importSchema(__dirname + '/typeDef.graphql');
  console.log(typeDef);
  const GQLSchema = gql`
    ${typeDefs}
  `;
  return GQLSchema; 
  */
};

const foobar = (async () => {
  console.log('before start');
  
  let status = await firstFunction();
  let typeDefs = await secondFunction(status);
  console.log('after start',typeDefs);
  console.log('after start',status);
  return typeDefs
})();
/*
(async() => {
  console.log('before start');
  
  let status = await firstFunction();
  let typeDefs = await secondFunction(status);


  console.log('after start',status);
})();
*/
/*
Promise.all([firstFunction()]).then(()=>{
  console.log('promise.all', GQLSchema)
})
*/

//TODO: build schema here
/*
const typeDefs = importSchema(__dirname + '/typeDef.graphql');

const GQLSchema = gql`
 ${typeDefs}
`;

*/
module.exports = foobar 