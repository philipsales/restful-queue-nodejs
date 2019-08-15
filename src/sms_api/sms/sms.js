'use strict';

const express = require('express')
const bodyParser = require('body-parser');
const twilioREST = require('../util/twilio_rest.js')
const router = express.Router();
const twilio = new twilioREST();

router.use(bodyParser.json());

router.post('/sendSMS', function (req, res) {
	
	var messages = req.body.messages;
	var requests = [];

	messages.forEach((messageDetail) => {
		var recipientNumber = messageDetail.recipient;
		var messageContent = messageDetail.messageContent;

		requests.push(twilio.sendMessage(messageContent, recipientNumber));
	});
	
	Promise.all(requests)
	.then(function(response) {
		res.status(200).send(response);
	})
});

module.exports =  router;
