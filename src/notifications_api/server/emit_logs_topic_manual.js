#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

const opt = { credentials: require('amqplib').credentials.plain('guest', 'guest') };

amqp.connect('amqp://localhost', opt, function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var exchange = 'amqp.topic.notification-requests';

    var binding_keys = 'notification_events';
    var msg = "hello";

    channel.assertExchange(exchange, 'topic', {
      durable: false
    });

    channel.publish(exchange, binding_keys, Buffer.from(msg));
    console.log(" [x] Sent %s:'%s'", binding_keys, msg);
    
  });

  setTimeout(function() { 
    connection.close(); 
    process.exit(0) 
  }, 500);
});