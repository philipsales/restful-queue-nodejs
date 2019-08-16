'use strict';
const request = require('request-promise');
const _ = require('lodash');
var express = require('express')
var router = express.Router();
const bodyParser = require('body-parser');

var orders = require('../orders/order.amqp');
var appointments = require('../appointments/appointment.amqp');

const log = require('../lib/logger/logger').logger;
const file = require('../lib/logger/util/filename');
const logger = log.child({ sourceFile: file.setFilename(__filename) });

router.use(bodyParser.json());

router.post('/orders/', (req, res) => {
    logger.info('POST /orders queued');

    var residentID = req.body.residentID;
    var messageCode = req.body.messageCode;
    var appID = req.body.appID;

    var request1 = new Promise((resolve, reject) => {
        var result = orders.initAMQP(residentID, messageCode, appID);
        resolve(result);
    });

    return Promise.all([request1])
        .then(function(payload) {
            logger.info('POST /orders response success');
            res.status(201).send(payload[0])
        }).catch(function(err){
            logger.warn('POST /orders response error');
            res.status(400).send(err)
        });

});


router.post('/appointments/', (req, res) => {
    logger.info('POST /appointments queued');

    var residentID = req.body.residentID;
    var messageCode = req.body.messageCode;
    var appID = req.body.appID;

    var request1 = new Promise((resolve, reject) => {
        var result = appointments.initAMQP(residentID, messageCode, appID);
        resolve(result);
    });

    return Promise.all([request1])
        .then(function(payload) {
            logger.info('POST /appointments response success');
            res.status(201).send(payload[0])
        }).catch(function(err){
            logger.warn('POST /appointments response error');
            res.status(400).send(err)
        });

});

module.exports =  router 