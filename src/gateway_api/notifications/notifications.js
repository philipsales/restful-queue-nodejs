'use strict';

const request = require('request-promise');
const _ = require('lodash');
var express = require('express')
var router = express.Router();
const bodyParser = require('body-parser');

var initAMQP = require('../server/emit_logs_topic');
var orders = require('../orders/order.amqp');

var couchbase = require('couchbase')

router.use(bodyParser.json());

const getPersonalInformation = (resident_id) => {
    //TODO: get the couchbase IP and bucket from .conf file

    //TODO: separte function for connection setter
    var cluster = new couchbase.Cluster('couchbase://139.162.49.49/');
    var bucket = cluster.openBucket('awhcurisdb');
    var N1qlQuery = couchbase.N1qlQuery;

    //TODO: separate function for statement generator
    var query = N1qlQuery.fromString("SELECT awhcurisdb.answers.* FROM awhcurisdb LIMIT 1");

    return new Promise((resolve, reject) => {
        bucket.query(query, function(err, result) {
            if (err) {
                console.log('error occurred: %j', err);
                reject(err);
            } else {
                console.log('PII document: %j', result);
                resolve(result);
            }
        });
    });
}

const getNotificaitonMessage = (message_id) => {
    //TODO: get the couchbase IP and bucket from .conf file
    //TODO: separte function for connection setter
    var couchbase = require('couchbase')
    var cluster = new couchbase.Cluster('couchbase://139.162.49.49/');
    var bucket = cluster.openBucket('awhcurisdb');
    var N1qlQuery = couchbase.N1qlQuery;

    //TODO: separate function for statement generator
    var query = N1qlQuery.fromString('SELECT awhcurisdb.* FROM awhcurisdb WHERE type = "message" LIMIT 1');

    return new Promise((resolve, reject) => {
        bucket.query(query, function(err, result) {
            if (err) {
                console.log('error occurred: %j', err);
                reject(err);
            } else {
                console.log('Notification messages document : %j', result);
                resolve(result);
            }
        });
    });
}

function setMessage(resident_id, message_id) {
    var request1 = getNotificaitonMessage(message_id) 
    var request2 = getPersonalInformation(resident_id);

    //TODO: patamblingin mo ung schema dito according to specs of cris

    return Promise.all([
        request1, 
        request2])
    .then(function(payloads) {
        console.log("All my payload", payloads);
    });
}

/*
router.post('/', (req, res) => {
    var message_id = req.params.pii_id;
    var pii_id = req.params.pii_id;

    console.log('POST GET');
    initAMQP.initAMQP(pii_id, message_id);
});
*/

router.post('/orders/', (req, res) => {
    var message_id = req.params.pii_id;
    var pii_id = req.params.pii_id;

    console.log('POST GET');
    orders.initAMQP(pii_id, message_id);
});

router.post('/appointments/', (req, res) => {
    var message_id = req.params.pii_id;
    var pii_id = req.params.pii_id;

    console.log('POST GET');
    initAMQP.initAMQP(pii_id, message_id);
});

/*
router.post('/', (req, res) => {
    var id = req.params.id;
    //consolidateMessage();
    var resident_id = 1;
    var message_id = 2;

    //TODO wait for promiseALL to return the combine value 
    //TODO: push the combine data value (i.e. _body) in the notificaitonAPI() 
    //TODO: add res.status(200).send()
    //var combined_data = setMessage(resident_id, message_id);

    //dummy data only
    var combined_data = {
        "messageBody" : "Hello world",
        "recipient" : "+639661191865" 
    }
    
    //TODO: make a promise function after promiseAll is done
    notificationAPI(combined_data);
    //res.status(200).send(result);
});
*/


function notificationAPI(body){
    //TODO: move the notificationAPI function to separate module
    //TODO: substitute the var _body with paramater body 
    // var _body = body
    var _body = body;
    var _response;

    const options = {
        method: 'POST',
        uri: 'http://194ddf7f.ngrok.io/sendSMS',
        body: _body,
        json: true,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    request(options).then(function (payload){
        _response = payload;
    })
    .catch(function (err) {
        console.log(err);
    })

}

module.exports =  router 