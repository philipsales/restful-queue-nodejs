'use strict';

const mergeFiles = require('merge-files');
const path = require('path');

const TypeDefBuilders = {

    setTypeDef: async function () {
        const typeDefPath = '../../domains/residents/typeDefs';
        const outputPath =  path.join(__dirname, typeDefPath + '/typeDef.graphql');

        const inputPathList = [
            path.join(__dirname, typeDefPath + '/types.graphql'),
            path.join(__dirname, typeDefPath + '/query.graphql'),
            path.join(__dirname, typeDefPath + '/mutation.graphql')
        ];

        let promise = new Promise((resolve,reject) => {
            try {
                const status = mergeFiles(inputPathList, outputPath)
                resolve(status)
            }
            catch(error) {
                reject(error);
            }
        }); 
        let result = await promise;
        console.log('inside', result);
        return result
    }
}

module.exports = TypeDefBuilders