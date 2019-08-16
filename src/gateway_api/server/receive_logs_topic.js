#!/usr/bin/env node

var amqp = require('amqplib/callback_api');
var binding_keys = ['notification_events']
var couchbase = require('couchbase')

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

    var exchange = 'amqp.topic.notification-requests';

    channel.assertExchange(exchange, 'topic', {
      durable: true 
    });


    channel.assertQueue('', {
      exclusive: true
    }, function(error2, q) {
      if (error2) {
        throw error2;
      }
      console.log(' [*] Waiting for logs..');

      binding_keys.forEach(function(key) {
        channel.bindQueue(q.queue, exchange, key);
      });

      /*
      args.forEach(function(key) {
        channel.bindQueue(q.queue, exchange, key);
      });
      */

      channel.consume(q.queue, function(data) {
        console.log(" [x] Received %s:'%s'", data.fields.routingKey, data.content.toString());
        var resident_id = 1;
        var message_id = 2;
        var combined_data = setMessage(resident_id, message_id);

        //pushCris.pushCris();


      }, {
        noAck: false 
      });
    });
  });
});

const getPersonalInformation = (resident_id) => {
    //TODO: get the couchbase IP and bucket from .conf file

    //TODO: separte function for connection setter
    var cluster = new couchbase.Cluster('couchbase://139.162.49.49/');
    var bucket = cluster.openBucket('awhcurisdb');
    var N1qlQuery = couchbase.N1qlQuery;

    //TODO: separate function for statement generator
    var query = N1qlQuery.fromString("SELECT awhcurisdb.answers.* FROM awhcurisdb LIMIT 1");

    return new Promise((resolve, reject) => {
        bucket.query(query, function(err, result) {
            if (err) {
                console.log('error occurred: %j', err);
                reject(err);
            } else {
                console.log('PII document: %j', result);
                resolve(result);
            }
        });
    });
}

const getNotificaitonMessage = (message_id) => {
    //TODO: get the couchbase IP and bucket from .conf file
    //TODO: separte function for connection setter
    var cluster = new couchbase.Cluster('couchbase://139.162.49.49/');
    var bucket = cluster.openBucket('awhcurisdb');
    var N1qlQuery = couchbase.N1qlQuery;

    //TODO: separate function for statement generator
    var query = N1qlQuery.fromString('SELECT awhcurisdb.* FROM awhcurisdb WHERE type = "message" LIMIT 1');

    return new Promise((resolve, reject) => {
        bucket.query(query, function(err, result) {
            if (err) {
                console.log('error occurred: %j', err);
                reject(err);
            } else {
                console.log('Notification messages document : %j', result);
                resolve(result);
            }
        });
    });
}

function setMessage(resident_id, message_id) {
  var request1 = getNotificaitonMessage(message_id) 
  var request2 = getPersonalInformation(resident_id);

  //TODO: patamblingin mo ung schema dito according to specs of cris

  return Promise.all([
      request1, 
      request2])
  .then(function(payloads) {
      console.log("All my payload", payloads);
  });
}