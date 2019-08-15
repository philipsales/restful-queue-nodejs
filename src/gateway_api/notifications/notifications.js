'use strict';
const request = require('request-promise');
const _ = require('lodash');
var express = require('express')
var router = express.Router();
const bodyParser = require('body-parser');

//var initAMQP = require('../server/emit_logs_topic');
var orders = require('../orders/order.amqp');
var appointments = require('../appointments/appointment.amqp');
var couchbase = require('couchbase')

router.use(bodyParser.json());
//remove this

router.post('/orders/', (req, res) => {
    var residentID = req.body.residentID;
    var messageCode = req.body.messageCode;
    var appID = req.body.appID;
    console.log('POST GET');
    orders.initAMQP(residentID, messageCode, appID);
});

router.post('/appointments/', (req, res) => {
    var residentID = req.body.residentID;
    var messageCode = req.body.messageCode;
    var appID = req.body.appID;
    console.log('micool', req.body);

    console.log('POST GET');
    appointments.initAMQP(residentID, messageCode, appID);
});

module.exports =  router 