#!/usr/bin/env node

function initSMSAMQP(pii_id, message_id) {

    //TODO: create configuration file
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
        var exchange = 'amqp.topic.sms-requests';

        var binding_keys = 'notification_events';
        var msg = "hello";

        channel.assertExchange(exchange, 'topic', {
            durable: true 
        });

        channel.publish(exchange, binding_keys, Buffer.from(msg));
        console.log(" [x] Sending to sms gateway %s:'%s'", binding_keys, msg);

    });


    });

}


function initEmailSMQP(pii_id, message_id) {

    //TODO: create configuration file
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
        var exchange = 'amqp.topic.email-requests';

        var binding_keys = 'notification_events';
        var msg = "hello";

        channel.assertExchange(exchange, 'topic', {
            durable: true 
        });

        channel.publish(exchange, binding_keys, Buffer.from(msg));
        console.log(" [x] Sending to sms gateway %s:'%s'", binding_keys, msg);

    });


    });

}


module.exports = { initSMSAMQP, initEmailSMQP }