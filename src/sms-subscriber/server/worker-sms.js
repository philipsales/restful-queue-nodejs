#!/usr/bin/env node
require('./config/config');

var axios = require('axios');
var amqp = require('amqplib/callback_api');

const log = require('../lib/logger/logger').logger;
const file = require('../lib/logger/util/filename');
const logger = log.child({ sourceFile: file.setFilename(__filename) });

const binding_keys = [ process.env.RABBIT_BINDING_KEYS ];

logger.info("listening.. '%s'", `${process.env.RABBIT_PROTOCOL}://${process.env.RABBIT_HOST}:${process.env.RABBIT_PORT}`); 

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

   //var exchange = 'amqp.topic.sms-requests';
   let exchange = process.env.RABBIT_EXCHANGE;

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

      channel.consume(q.queue, function(data) {
        logger.info("[x] Received Data from RabbitMQ routing key: '%s'", data.fields.routingKey);

        var body = data.content.toString();
        notificationAPI(body);

      }, {
        noAck: false 
      });
    });
  });
});


function notificationAPI(body){
  var messages = JSON.parse(body);

  logger.info("POST '%s'", `${process.env.MSGS_URI}`);
  axios.post(`${process.env.MSGS_URI}`, messages)

    .then((response) => {
      if (response.status == 200) {
        logger.info('SMS-SUBSCRIBER', 'sending alert was a success!');
      }

      logger.info('SMS-SUBSCRIBER ', `status code: ${response.status}`);
    }).catch(function(error){
      logger.error("SMS subscriber error response '%s'", error.message);

    });

}

