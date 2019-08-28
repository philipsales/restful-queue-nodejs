'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const twilioREST = require('../util/twilio_rest');

const log = require('../lib/logger/logger');
const logger = log.logger.child({ sourceFile: log.file.setFilename(__filename) });

router.use(bodyParser.json());

router.post('/sendSMS', function (req, res) {
	
	logger.info('/sendSMS');
	var messages = req.body;

	Promise.all(
		messages.map(message => {
	    return twilioREST.sendMessage(message.messageContent, message.recipient);
	  })

	)
	.then(function(response) {
		logger.info('success');
		res.status(200).send(response);
	})
	.catch(function(error){
		logger.error(error);
		res.status(401).send(response);
	});
	
});

module.exports =  router;
