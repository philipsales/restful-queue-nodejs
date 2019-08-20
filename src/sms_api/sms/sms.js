'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const twilioREST = require('../util/twilio_rest');

const log = require('../lib/logger/logger').logger;
const file = require('../lib/logger/util/filename');
const logger = log.child({ sourceFile: file.setFilename(__filename) });

router.use(bodyParser.json());

router.post('/sendSMS', function (req, res) {
	
	var messages = req.body;

	Promise.all(
		messages.map(message => {
	    return twilioREST.sendMessage(message.messageContent, message.recipient);
	  })

	)
	.then(function(response) {
		res.status(200).send(response);
	})
});

module.exports =  router;
