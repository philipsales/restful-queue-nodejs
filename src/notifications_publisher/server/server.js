#!/usr/bin/env node
require('./config/config');


function initSMSAMQP(message) {
    const log = require('../lib/logger/logger').logger;
    const file = require('../lib/logger/util/filename');
    const logger = log.child({ sourceFile: file.setFilename(__filename) });

    var amqp = require('amqplib/callback_api');
    const opt = { credentials: require('amqplib') .credentials.plain(process.env.RABBIT_USERNAME, process.env.RABBIT_PASSWORD) };

    amqp.connect(`${process.env.RABBIT_PROTOCOL}://${process.env.RABBIT_HOST}:${process.env.RABBIT_PORT}`, opt, function(error0, connection) {
    if (error0) {
        throw error0;
    }

    connection.createChannel(function(error1, channel) {
        if (error1) {
        throw error1;
        }
        var exchange = 'amqp.topic.sms-requests';

        var binding_keys = 'notification_events';

        channel.assertExchange(exchange, 'topic', {
            durable: true 
        });

        channel.publish(exchange, binding_keys, Buffer.from(message));
        logger.info("[x] Data sent to RabbitMQ thru sms-request exchange: '%s'", Buffer.from(message));


    });


    });

}

module.exports = { initSMSAMQP }