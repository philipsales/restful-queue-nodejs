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
    return result.map(resident => this.personMapper(resident))[0];
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

    /*
    return Array.isArray(results)
      ? results.map(resident => this.residentMapper(resident)) : [];
      */
    return Array.isArray(results)
      ? results.map(person => this.personMapper(person)) : [];
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

    documents =  args.input.map(arg => this.residentMapper(arg)); 
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

    //let meta =  args.input._document
    //let answers =  args.input.domainResource
    //let data = {...meta, answers}
    console.log(args.input);
    let data =   this.residentMapper(args.input); 

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

  
  residentMapper(args) {
    let resident = args.domainResource;
    let _docs = args._document;
    console.log('DOCS', _docs);
    console.log(resident.identifier.value);

    let result = { 
      answers: {
        First_Name: resident.name.firstName,
        Last_Name: resident.name.lastName,
        Middle_Name: resident.name.middleName,
        lastNameSuffix: resident.name.suffix,
        Gender: resident.gender,
        DoB: resident.birthDate,
        additionalIdentificationValue: resident.identifier.value,
        additionalIdentificationType: resident.identifier.type,
        //TODO: Schema is limited to single arary based on KOBO AQM Schema 
        provinceCity: resident.address[0].city,
        countryName: resident.address[0].country,
        postalCode: resident.address[0].postalCode,
        emailAddress: this.telecomInputMapper(resident.telecom,'emailAddress'),
        cellphoneNumber: this.telecomInputMapper(resident.telecom,'cellphoneNumber')


      },
      type: _docs.type,
      organization: _docs.organization,
      dateCreated: _docs.dateCreated,
      createdBy: _docs.createdBy
    };

    return result;
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
  personMapper(Person) {
    let person = { 
      domainResource : {
        address: {
          type: "physical",
          text: Person.answers.Address_1,
          line: Person.answers.Address_2,
          city: Person.answers.provinceCity,
          country: Person.answers.countryCode,
          postalCode: Person.answers.postalCode
        },
        birthDate: Person.answers.DoB,
        managingOrganization: {
          type: "RHU",
          name: Person.organization
        },
        telecom: this.telecomQueryMapper(Person.answers),
        gender: Person.answers.Gender,
        name: {
          firstName: Person.answers.First_Name,
          lastName: Person.answers.Last_Name,
          middleName: Person.answers.Middle_Name,
          suffix: Person.answers.lastNameSuffix
        },
        identifier: {
          value: Person.answers.additionalIdentificationValue,
          type: Person.answers.additionalIdentificationType
        }
      },
      _document: {
        _id: Person._id,
        createdBy: Person.createdBy,
        organization: Person.organization,
        dateCreated: Person.dateCreated,
        type: [Person.type]
      }
    }
    return person;
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
      cellphone['value']= person.countryCode + " " + person.cellphoneNumber
      telecom.push(cellphone);
    }

    return telecom
  }


}

module.exports = ResidentAPI;
