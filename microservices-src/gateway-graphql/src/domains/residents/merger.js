'use strict';

const mergeFiles = require('merge-files');
const outputPath = __dirname + '/typeDefs/typeDefs.graphql';
 
const inputPathList = [
    __dirname + '/typeDefs/query.graphql',
    __dirname + '/typeDefs/mutation.graphql',
    __dirname + '/typeDefs/types.graphql'
];
 
async function mergeTypeDefs(){
    const status = await mergeFiles(inputPathList, outputPath)
    return status;
}

let result = mergeTypeDefs();
console.log('result', result);



module.exports = { mergeTypeDefs } 
