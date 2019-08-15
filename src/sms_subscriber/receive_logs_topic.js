#!/usr/bin/env node
require('./config/config');
const axios = require('axios');
var couchbase = require('couchbase');
var amqp = require('amqplib/callback_api');
var binding_keys = ['notification_events']
var request = require('request-promise');


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
      console.log(' [*] Waiting for logs. To exit press CTRL+C');

      binding_keys.forEach(function(key) {
        channel.bindQueue(q.queue, exchange, key);
      });

      /*
      args.forEach(function(key) {
        channel.bindQueue(q.queue, exchange, key);
      });
      */

      channel.consume(q.queue, function(data) {
        console.log(" [x] sms subscriber: Received in the SMS gateway %s:'%s'", data.fields.routingKey, data.content.toString());
        var body = data.content.toString();
        notificationAPI(body);

      }, {
        noAck: false 
      });
    });
  });
});


function notificationAPI(body){
  //TODO: move the notificationAPI function to separate module
  //TODO: substitute the var _body with paramater body 
  // var _body = body
  console.log(body, 'micool');
  var messages = JSON.parse(body);
  axios.post(`${process.env.MSGS_PROTOCOL}${process.env.MSGS_HOST}${process.env.MSGS_SMS_CHANNEL}${process.env.MSGS_SMS_ENDPOINT}`, { messages }).then(response => {
    if (response.status == 200) {
      console.log('SMS-SUBSCRIBER', 'sending alert was a success!');
    }
    console.log('SMS-SUBSCRIBER', `status code: ${response.status}`);
  });

}
