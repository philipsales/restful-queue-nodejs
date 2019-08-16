'use strict';

const express = require('express');
const bodyParser = require('body-parser');
//const twilioREST = require('../util/twilio_rest.js');
const router = express.Router();
const twilioREST = require('../util/twilio_rest');
//const twilio = new twilioREST();

const log = require('../lib/logger/logger').logger;
const file = require('../lib/logger/util/filename');
const logger = log.child({ sourceFile: file.setFilename(__filename) });

router.use(bodyParser.json());

router.post('/sendSMS', function (req, res) {
	
	console.log('POST /sendSMS');
	//console.log('POST /sendSMS', req.body.messageContent);

	/*
	messages.forEach((messageDetail) => {
		logger.info('Message', messageDetail);
		var recipientNumber = messageDetail.recipient;
		var messageContent = messageDetail.messageContent;
		requests.push(twilio.sendMessage(messageContent, recipientNumber));
	});
	*/

	
	//var recipientNumber = message.recipient;
	var recipientNumber ='+639661191865';
	//var	messageContent = req.body[0].messageContent ;
	var	messageContent = 'hi ooty';
	

	twilioREST.sendMessage(messageContent,recipientNumber)
		.then(function(response){
			res.status(201);
		}).catch(function(err){
			logger.error(err);
			res.status(400);
	});
	
	/*
	var request1 = new Promise((resolve, reject) => {
		var result = twilioREST.sendMessage(messageContent,recipientNumber);
		resolve(result);
	});
	
	Promise.all([request1])
		.then(function(response) {
			res.status(200);
		}).catch(function(err){
			res.status(400);
	});
	*/
});

module.exports =  router;
