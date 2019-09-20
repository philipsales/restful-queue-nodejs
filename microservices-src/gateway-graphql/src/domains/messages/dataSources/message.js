'use strict';

const couchbase = require('couchbase');
const axios = require('axios');
//FIX ../../
const config = require('../../../../src/server/config/config').config[process.env.NODE_ENV];

class MessageAPI {
  constructor() { 
    this.AWHCURISDB =  config.DB.AWHCURISDB

    this.awhcurisdbURL = this.AWHCURISDB.COUCHBASE_SYNC_URI;
    this.cluster = new couchbase.Cluster(this.AWHCURISDB.COUCHBASE_N1QL_URI);
    this.cluster.authenticate("", this.AWHCURISDB.COUCHBASE_N1QL_PASSWORD)
    this.bucket = this.cluster.openBucket(this.AWHCURISDB.COUCHBASE_BUCKET);
  }

  async getMessages() {
    let statement = `SELECT ${this.AWHCURISDB.COUCHBASE_BUCKET}.* 
        FROM ${this.AWHCURISDB.COUCHBASE_BUCKET} 
        WHERE type="notification-messages"`;

    let query = couchbase.N1qlQuery.fromString(statement);

    let promise = new Promise((resolve,reject) => {
      this.bucket.query(query, (error, response) => {
        if(error){
          console.log(error);
          reject(error)
        } 
        else {
          return resolve(response);
        }
      })
    }); 

    let result = await promise; 

    return Array.isArray(result)
      ? result.map(message => this.messageMapper(message)) : [];
  }

  
  async getMessage(messageCode) {
    let statement = `SELECT ${this.AWHCURISDB.COUCHBASE_BUCKET}.* 
        FROM ${this.AWHCURISDB.COUCHBASE_BUCKET} 
        WHERE messageCode="${messageCode}";`;

    let query = couchbase.N1qlQuery.fromString(statement);

    let promise = new Promise((resolve,reject) => {
      this.bucket.query(query, (error, response) => {
        if(error){
          console.log(error);
          reject(error)
        } 
        else {
          return resolve(response);
        }
      })
    }); 

    let result = await promise; 

    return result.map(message => this.messageMapper(message))[0];
  }
  
  messageMapper(message) {
    return {
      messageCode: message.messageCode,
      messageContent: message.messageContent,
      lang: message.lang,
      channelType: message.channelType
    }
  }



}

module.exports = MessageAPI;
