#!/usr/bin/env node

const log = require('../lib/logger/logger').logger;
const file = require('../lib/logger/util/filename');
const logger = log.child({ sourceFile: file.setFilename(__filename) });

function initAMQP(residentID, messageCode, appID) {

    //TODO: create configuration file
    var amqp = require('amqplib/callback_api');
    const opt = { credentials: require('amqplib')
        .credentials.plain(process.env.RABBIT_USERNAME, process.env.RABBIT_PASSWORD) };

    amqp.connect(`${process.env.RABBIT_PROTOCOL}://${process.env.RABBIT_HOST}:${process.env.RABBIT_PORT}`, opt, function(error0, connection) {
    if (error0) {
        logger.warn('amqp connectoin', error0);
        throw error0;
    }

    connection.createChannel(function(error1, channel) {

        if (error1) {
          logger.warn('amqp connection createChannel error', error1);
          throw error1;
        }

        var exchange = 'amqp.topic.notification-requests';

        var binding_keys = 'notification_events';
        var msg = JSON.stringify({residentID, messageCode, appID});

        channel.assertExchange(exchange, 'topic', {
            durable: true 
        });

        channel.publish(exchange, binding_keys, Buffer.from(msg));
        logger.info("[x] Data sent to RabbitMQ '%s'", msg);

    });


    });

}

module.exports = { initAMQP }
