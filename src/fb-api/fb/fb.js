'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const twilioREST = require('../util/twilio_rest');
const url = require('url');
const requestPromise = require('request-promise');

const log = require('../lib/logger/logger');
const logger = log.logger.child({ sourceFile: log.file.setFilename(__filename) });

router.use(bodyParser.json());

router.post('/', function (req, res) {
    const BOT_ID = process.env.BOT_ID;
    const CHATFUEL_TOKEN = process.env.CHATFUEL_TOKEN;
    
    const userId = req.body[0].messenger_id;
    const blockName = req.body[0].blockName;
	const messageContent = req.body[0].messageContent;

    const broadcastApiUrl = `https://api.chatfuel.com/bots/${BOT_ID}/users/${userId}/send`;

    const query = Object.assign({
            chatfuel_token: CHATFUEL_TOKEN,
            chatfuel_block_name: blockName,
			messageContent: messageContent
        }
    );
    const chatfuelApiUrl = url.format({
        pathname: broadcastApiUrl,
        query
    });

    const options = {
        uri: chatfuelApiUrl,
        headers: {
            'Content-Type': 'application/json'
        }
    };

    requestPromise.post(options)
        .then(() => {
            res.json({"response":"Message/s successfully sent."});
        });
});

module.exports =  router;
