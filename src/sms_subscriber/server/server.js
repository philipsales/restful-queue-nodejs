#!/usr/bin/env node
require('./config/config');
var request = require('request-promise');
const axios = require('axios');

const log = require('../lib/logger/logger').logger;
const file = require('../lib/logger/util/filename');
const logger = log.child({ sourceFile: file.setFilename(__filename) });

var amqp = require('amqplib/callback_api');
var binding_keys = ['notification_events']


const opt = { credentials: require('amqplib')
  .credentials.plain(process.env.RABBIT_USERNAME, process.env.RABBIT_PASSWORD) };
amqp.connect(`${process.env.RABBIT_PROTOCOL}://${process.env.RABBIT_HOST}:${process.env.RABBIT_PORT}`, opt, function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }

    var exchange = 'amqp.topic.sms-requests';

    channel.assertExchange(exchange, 'topic', {
      durable: true 
    });


    channel.assertQueue('', {
      exclusive: true
    }, function(error2, q) {
      if (error2) {
        throw error2;
      }
      logger.info('[*] Waiting for logs..');

      binding_keys.forEach(function(key) {
        channel.bindQueue(q.queue, exchange, key);
      });

      /*
      args.forEach(function(key) {
        channel.bindQueue(q.queue, exchange, key);
      });
      */

      channel.consume(q.queue, function(data) {
        logger.info("[x] Received Data from RabbitMQ routing key: '%s'", data.fields.routingKey);
        logger.info("[x] Received Data from RabbitMQ data: '%s'", data.content.toString());
        var body = data.content.toString();
        notificationAPI(body);

      }, {
        noAck: false 
      });
    });
  });
});


/*
function notificationAPI(body){
  //TODO: move the notificationAPI function to separate module
  //TODO: substitute the var _body with paramater body 
  // var _body = body
  var messages = JSON.parse(body);
  logger.info("POST /sms API '%s'",process.env.MSGS_PROTOCOL);


  axios.post(`${process.env.MSGS_PROTOCOL}${process.env.MSGS_HOST}${process.env.MSGS_SMS_CHANNEL}${process.env.MSGS_SMS_ENDPOINT}`, { messages })
    .then((response) => {
      logger.info(response);

      if (response.status == 201) {
        logger.info('SMS-SUBSCRIBER', 'sending alert was a success!');
      }

      logger.info('SMS-SUBSCRIBER', `status code: ${response.status}`);

  }).catch(function(error){
    logger.error(error);

  });

}
*/


function notificationAPI(body){
  //TODO: move the notificationAPI function to separate module
  //TODO: substitute the var _body with paramater body 
  // var _body = body

  /*
  var _body = body;
  var _body = {
    "message": {
      "recipient": "+639661191865",
      "messageContent": "string"
    }
  }
  */

  var _body = JSON.parse(body);
  logger.info("Data sent to SMS API");

  var _response;

  const options = {
      method: 'POST',
      uri: 'http://localhost:3002/sms/sendSMS',
      body: _body,
      json: true,
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
  }

  request(options)
    .then(function (payload){
        _response = payload;
        logger.info("Success response of SMS API '%s'", response);
    }).catch(function (err) {
        logger.error("Error response of SMS API");
        logger.error(err);
  });

  return
}
