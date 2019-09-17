'use strict';

const couchbase = require('couchbase');
const axios = require('axios');

//TODO: FIX ALL THIS CONIFGURATION
const auth = "Basic " + new Buffer
	.from("curisAdminUser" + ":" + "adm(1)mwh")
  .toString("base64")
axios.defaults.headers.common['Authorization'] = auth;
axios.defaults.headers.post['Content-Type'] = "application/json";

const cluster = new couchbase.Cluster("couchbase://139.162.49.49:8091");
cluster.authenticate("", "Awhcur1sdb")
const bucket = cluster.openBucket("awhcurisdb");

class MessageAPI {
  constructor() { }

  messageMapper(message) {
    return {
      messageCode: message.messageCode,
      messageContent: message.messageContent,
      lang: message.lang,
      channelType: message.channelType
    }
  }

  async getMessages() {
    
    let statement = `SELECT awhcurisdb.* FROM awhcurisdb WHERE type="notification-messages"`;
    console.log(statement);
    let query = couchbase.N1qlQuery.fromString(statement);

    let promise = new Promise((resolve,reject) => {
      bucket.query(query, (error, response) => {
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
    let statement = `SELECT awhcurisdb.* FROM awhcurisdb WHERE messageCode="${messageCode}";`;
    console.log(statement);
    let query = couchbase.N1qlQuery.fromString(statement);

    let promise = new Promise((resolve,reject) => {
      bucket.query(query, (error, response) => {
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
  



}

module.exports = MessageAPI;
