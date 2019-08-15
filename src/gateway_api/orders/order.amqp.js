#!/usr/bin/env node

function initAMQP(residentID, messageCode, appID) {

    //TODO: create configuration file
    var amqp = require('amqplib/callback_api');
    const opt = { credentials: require('amqplib')
        .credentials.plain(process.env.RABBIT_USERNAME, process.env.RABBIT_PASSWORD) };

    console.log(`${process.env.RABBIT_PROTOCOL}://${process.env.RABBIT_HOST}:${process.env.RABBIT_PORT}`, "micool");
    amqp.connect(`${process.env.RABBIT_PROTOCOL}://${process.env.RABBIT_HOST}:${process.env.RABBIT_PORT}`, opt, function(error0, connection) {
    if (error0) {
        throw error0;
    }

    connection.createChannel(function(error1, channel) {
        if (error1) {
        throw error1;
        }
        var exchange = 'amqp.topic.notification-requests';

        var binding_keys = 'notification_events';
        var msg = JSON.stringify({residentID, messageCode, appID});

        channel.assertExchange(exchange, 'topic', {
            durable: true 
        });

        channel.publish(exchange, binding_keys, Buffer.from(msg));
        console.log(" [x] Sent %s:'%s'", binding_keys, msg);

    });


    });

}

module.exports = { initAMQP }