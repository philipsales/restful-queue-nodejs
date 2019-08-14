'use strict';

const express = require('express')
const bodyParser = require('body-parser');
const twilioREST = require('../util/twilio_rest.js')
const router = express.Router();
const twilio = new twilioREST();

router.use(bodyParser.json());

router.post('/sendSMS', function (req, res) {
	
	var messageDetail = req.body.message;
	var recipientNumber = messageDetail.recipient;
	var messageContent = messageDetail.messageContent;
	var request = twilio.sendMessage(messageContent, recipientNumber);

	Promise.all([request])
	.then(function(data) {
		res.status(201).send(data[0]);
	})
});

module.exports =  router;
