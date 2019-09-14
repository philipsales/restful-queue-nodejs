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
  constructor() { 
    console.log("resdient API");
  }

  async getResident(residentID) {
    let statement = `SELECT awhpiidb.* FROM awhpiidb WHERE meta().id="${residentID}" LIMIT 1`;
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
    return result.map(person => this.residentToPersonMapper(person))[0];
  }

  async getResidents(args) {
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
      ? results.map(person => this.residentToPersonMapper(person)) : [];
  }

  setQuery(args){
    let whereClause = this.parseFilters(args.filter)
    let orderClause = this.parseOrderBy(args.orderBy)
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
    let revision = await this.getLatestRevision(args.id);
    let url = `http://139.162.49.49:4984/awhpiidb/${args.id}?new_edits=true&rev=${revision}`
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
