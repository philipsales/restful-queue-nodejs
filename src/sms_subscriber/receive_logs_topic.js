#!/usr/bin/env node

var couchbase = require('couchbase');
var amqp = require('amqplib/callback_api');
var binding_keys = ['notification_events']


const opt = { credentials: require('amqplib').credentials.plain('guest', 'guest') };
amqp.connect('amqp://localhost', opt, function(error0, connection) {
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
        console.log(" [x] Received in the SMS gateway %s:'%s'", data.fields.routingKey, data.content.toString());

        //TODO: manipulate the data here

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
  var _body = body;
  var _response;

  const options = {
      method: 'POST',
      uri: 'http://194ddf7f.ngrok.io/sendSMS',
      body: _body,
      json: true,
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      }
  }

  request(options).then(function (payload){
      _response = payload;
  })
  .catch(function (err) {
      console.log(err);
  })

}
