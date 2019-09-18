'use strict';

const axios = require('axios');
const couchbase = require('couchbase');
//FIX ../../
const config = require('../../../../src/server/config/config').config[process.env.NODE_ENV];

class ResidentAPI {
  constructor() { 
    this.AWHPIIDB =  config.DB.AWHPIIDB

    this.awhpiidbURL = this.AWHPIIDB.COUCHBASE_SYNC_URI;
    this.cluster = new couchbase.Cluster(this.AWHPIIDB.COUCHBASE_N1QL_URI);
    this.cluster.authenticate("", this.AWHPIIDB.COUCHBASE_N1QL_PASSWORD)
    this.bucket = this.cluster.openBucket(this.AWHPIIDB.COUCHBASE_BUCKET);

    this.auth = "Basic " + new Buffer
              .from(this.AWHPIIDB.COUCHBASE_SYNC_USERNAME + ":" + this.AWHPIIDB.COUCHBASE_SYNC_PASSWORD)
              .toString("base64")
    axios.defaults.headers.common['Authorization'] = this.auth;
    axios.defaults.headers.post['Content-Type'] = "application/json";

    this.documentMeta = ["organization", "createdBy", "type", "dateCreated"];
  }

  async getResident(residentID) {
    let statement = `SELECT ${this.AWHPIIDB.COUCHBASE_BUCKET}.* FROM ${this.AWHPIIDB.COUCHBASE_BUCKET} WHERE meta().id="${residentID}" LIMIT 1`;
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
    return result.map(person => this.residentToPersonMapper(person))[0];
  }

  async getResidents(args) {
    let statement = this.setQuery(args);
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

    let results = await promise; 

    return Array.isArray(results)
      ? results.map(person => this.residentToPersonMapper(person)) : [];
  }

  setQuery(args){
    let whereClause = this.parseFilters(args.filter)
    let orderClause = this.parseOrderBy(args.orderBy)
    let offsetClause = this.parseOffset(args.offset)
    let limitClause = this.parseLimit(args.limit)

    let statement = `SELECT ${this.AWHPIIDB.COUCHBASE_BUCKET}.* FROM ${this.AWHPIIDB.COUCHBASE_BUCKET}`;

    if (whereClause)
        statement += whereClause
    if (orderClause)
        statement += orderClause 
    if (offsetClause)
        statement += offsetClause 
    if (limitClause)
        statement += limitClause 

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
    return this.documentMeta.find(value => value === key);
  }

  parseOrderBy(orderBy){
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
    const url = this.awhpiidbURL;

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

    const url = this.awhpiidbURL + '_bulk_docs';

    documents =  args.input.map(resident => this.personToResidentMapper(resident)); 
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
    let revisionID = await this.getLatestRevisionID(args.id);
    const url = this.awhpiidbURL + `${args.id}?new_edits=true&rev=${revisionID}`;

    let data =   this.personToResidentMapper(args.input); 

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

  async getLatestRevisionID(id) {
    const url = this.awhpiidbURL + `${id}?revs=true`;
    
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
  
  //TODO: make this model and separate file
  personToResidentMapper(data) {
    let person = data.domainResource;
    let _document = data._document;

    let resident = { 
      answers: {
        First_Name: person.name.firstName,
        Last_Name: person.name.lastName,
        Middle_Name: person.name.middleName,
        lastNameSuffix: person.name.suffix,
        Gender: person.gender,
        DoB: person.birthDate,
        additionalIdentificationValue: person.identifier.value,
        additionalIdentificationType: person.identifier.type,
        //TODO: Address object is limited to single arary because of existing KOBO AQM Schema 
        provinceCity: person.address[0].city,
        countryName: person.address[0].country,
        postalCode: person.address[0].postalCode,
        emailAddress: this.telecomInputMapper(person.telecom,'emailAddress'),
        cellphoneNumber: this.telecomInputMapper(person.telecom,'cellphoneNumber')
      },
      organization: _document.organization,
      dateCreated: _document.dateCreated,
      createdBy: _document.createdBy,
      type: _document.type
    };

    return resident;
  }

   //TODO: make this model and separate file
   residentToPersonMapper(data) {
    let resident = data.answers;
    let _document = data;

    let person = { 
      domainResource : {
        address: [{
          type: "physical",
          text: resident.Address_1,
          line: resident.Address_2,
          city: resident.provinceCity,
          country: resident.countryCode,
          postalCode: resident.postalCode
        }],
        birthDate: resident.DoB,
        managingOrganization: {
          type: "RHU",
          name: _document.organization
        },
        telecom: this.telecomQueryMapper(resident),
        gender: resident.Gender,
        name: {
          firstName: resident.First_Name,
          lastName: resident.Last_Name,
          middleName: resident.Middle_Name,
          suffix: resident.lastNameSuffix
        },
        identifier: {
          value: resident.additionalIdentificationValue,
          type: resident.additionalIdentificationType
        }
      },
      _document: {
        _id: _document._id,
        createdBy: _document.createdBy,
        organization: _document.organization,
        dateCreated: _document.dateCreated,
        type: _document.type
      }
    }
    return person;
  }

  //TODO: make this model and separate file
  telecomInputMapper(telecom,system) {
    //TODO: telecom is limited to single arary based on KOBO AQM Schema 
    let contactValue;
    telecom.forEach(item => {
      if(system === item.system)
        contactValue = item.value 
    });
    return contactValue;
  }

  //TODO: make this model and separate file
  telecomQueryMapper(person){
    let telecom = [];

    if (person.emailAddress){
      let email = {};
      email['system'] = "emailAddress";
      email['value']= person.emailAddress;
      telecom.push(email);
    }

    if (person.cellphoneNumber){
      let cellphone = {};
      cellphone['system'] = "cellphoneNumber";
      cellphone['value']= person.cellphoneNumber
      telecom.push(cellphone);
    }

    return telecom
  }
}

module.exports = ResidentAPI;
