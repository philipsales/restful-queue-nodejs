'use strict';

const axios = require('axios');
const couchbase = require('couchbase');

//TODO: FIX ALL THIS CONIFGURATION
const auth = "Basic " + new Buffer
	.from("curisAdminUser" + ":" + "adm(1)mwh")
  .toString("base64")
axios.defaults.headers.common['Authorization'] = auth;
axios.defaults.headers.post['Content-Type'] = "application/json";

const cluster = new couchbase.Cluster("couchbase://139.162.49.49:8091");
cluster.authenticate("", "Awhp1idb")
const bucket = cluster.openBucket("awhpiidb");

class ResidentAPI {
  constructor() { }

  residentMapper(resident) {
    return { 
      adddress: {
        countryCode: resident.answers.countryCode,
        countryName: resident.answers.countryName,
        Address_1: resident.answers.Address_1,
        Address_2: resident.answers.Address_2,
        postalCode: resident.answers.postalCode, 
        provinceCity: resident.answers.provinceCity 
      },
      personalInformation: {
        consentGiven: resident.answers.Consent_Given,
        DoB: resident.answers.DoB,
        First_Name: resident.answers.First_Name,
        Gender: resident.answers.Gender,
        Last_Name: resident.answers.Last_Name,
        Middle_Name: resident.answers.Middle_Name,
        lastNameSuffix: resident.answers.lastNameSuffix
      },
      contactDetail: {
        emailAddress: resident.answers.emailAddress,
        cellphoneNumber: resident.answers.cellphoneNumber
      },
      identificationCard: {
        additionalIdentificationType: resident.answers.additionalIdentificationType,
        additionalIdentificationValue: resident.answers.additionalIdentificationValue,
        poorCardHas: resident.answers.poorCardHas,
        poorCardNumber: resident.answers.poorCardNumber, 
        poorCardReason: resident.answers.poorCardReason,
      },
      _residentMeta: {
        _id: resident._id,
        createdBy: resident.createdBy,
        organization: resident.organization,
        dateCreated: resident.dateCreated
      }
    }
  }

  async getResident(residentID) {
    console.log('RESIDENT ID', residentID);
    console.log('process ENV',process.env.COUCHBASE[0].COUCHBASE_BUCKET);

    let statement = `SELECT awhpiidb.* FROM awhpiidb WHERE meta().id="${residentID}" LIMIT 1`;
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
    return result.map(resident => this.residentMapper(resident))[0];
  }


  async getResidents(args) {
    console.log('process ENV',process.env.COUCHBASE[0].COUCHBASE_BUCKET);
    console.log('Resident', args);

    let statement = this.setQuery(args);
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

    let results = await promise; 

    return Array.isArray(results)
      ? results.map(resident => this.residentMapper(resident)) : [];
  }

  setQuery(args){
    let whereClause = this.parseFilters(args.filter)
    let orderClause = this.parseOrder(args.orderBy)
    let offsetClause = this.parseOffset(args.offset)
    let limitClause = this.parseLimit(args.limit)

    let statement = `SELECT awhpiidb.* FROM awhpiidb`;

    if (whereClause)
        statement += whereClause
    if (orderClause)
        statement += orderClause 
    if (offsetClause)
        statement += offsetClause 
    if (limitClause)
        statement += limitClause 

    console.log('SetQuery', statement);

    return statement;
  }

  parseFilters(data){
    let filters = '';

    Object.keys(data).forEach((key, idx, array) => {
      let kv;
      let match = this.matchMetaDataFields(key)

      if(match){
        kv = "" + key + '="' + data[key]+ '" ';
      }
      else{
        kv = "answers." + key + '="' + data[key]+ '" ';
      }

      if (idx !== array.length - 1){ 
        filters += kv + "AND "
      }
      else {
        filters += kv
      }
    });

    return " WHERE " + filters;
  }

  matchMetaDataFields(key){
    let meta = ["organization", "createdBy", "type", "dateCreated"];
    return meta.find(x => x === key)
  }

  parseOrder(orderBy){

    if(orderBy){
      let field; 
      let key = orderBy.split("_")[0];
      let match = this.matchMetaDataFields(key)

      if(match){
        field = orderBy.replace(/_/g, ' ');
      } 
      else {
        field = "answers." + orderBy.replace(/_/g, ' ');
      }
    return " ORDER BY "  + field 
    }
  }

  parseOffset(offset){
    if(offset)
      return " OFFSET " + offset;
  }

  parseLimit(limit){
    if(limit)
      return " LIMIT " + limit; 
  }

  async postResident(args) {
    var url = "http://139.162.49.49:4984/awhpiidb/"

    let meta =  args.input._residentMeta
    let answers =  args.input.resident
    let data = {...meta, answers}
    
    let promise = new Promise((resolve,reject) => {
      axios.post(url, data)
        .then((response) => {
          let result = { 
            "id": response.data.id
          };
          console.log(result);
          resolve(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        }); 

      }); 

      return await promise; 
  }

  async postResidents(args) {
    let bulkDocs = {};
    let documents = [];

    const url = "http://139.162.49.49:4984/awhpiidb/_bulk_docs"

    args.input.forEach(item => {
      let meta =  item._residentMeta
      let answers =  item.resident
      let document = {...meta, answers }
      documents.push(document)
    });
    bulkDocs = { "docs" : documents };
    
    let promise = new Promise((resolve,reject) => {
      axios.post(url, bulkDocs)
        .then((response) => {

          console.log(response.data);
          resolve(response.data);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });

      }); 

      return await promise; 
  }


  async putResident(args) {
    let revision = await this.getLatestRevision(args.id);
    let url = `http://139.162.49.49:4984/awhpiidb/${args.id}?new_edits=true&rev=${revision}`

    let meta =  args.input._residentMeta
    let answers =  args.input.resident
    let data = {...meta, answers}

    let promise = new Promise((resolve,reject) => {
      axios.put(url, data)
        .then((response) => {
          let result = { 
            "id": response.data.id
          };
          console.log(result);
          resolve(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });

      }); 

      return await promise; 
  }

  async getLatestRevision(id) {
    var url = `http://139.162.49.49:4984/awhpiidb/${id}?revs=true`;
    
    let promise = new Promise((resolve,reject) => {
      axios.get(url)
        .then((response) => {
          let result = response.data._rev;
          resolve(result);
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });

      }); 

      return await promise; 
  }
}

module.exports = ResidentAPI;
