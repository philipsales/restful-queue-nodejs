#!/usr/bin/env node
require('./config/config');

var axios = require('axios');

const log = require('../lib/logger/logger').logger;
const file = require('../lib/logger/util/filename');
const logger = log.child({ sourceFile: file.setFilename(__filename) });

var amqp = require('amqplib/callback_api');
var bindingKeys = ['notification_events']


const opt = { credentials: require('amqplib').credentials.plain(process.env.RABBIT_USERNAME, process.env.RABBIT_PASSWORD) };


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


    channel.assertQueue('', { exclusive: true }, 
    function(error2, q) {
      if (error2) {
          throw error2;
      }
      logger.info(' [*] Waiting for logs..');

      bindingKeys.forEach(function(key) {
        channel.bindQueue(q.queue, exchange, key);
      });


      channel.consume(q.queue, function(data) {
        logger.info(" [x] Received data from RabbitMQ routing key: '%s'", data.fields.routingKey );
        logger.info(" [x] Received data from RabbitMQ data: '%s'", data.content.toString());

        var arguments = JSON.parse(data.content.toString());
        var residentID = arguments.residentID;
        var messageCode = arguments.messageCode;

        axios.get(`${process.env.MPI_PROTOCOL}${process.env.MPI_HOST}${process.env.MPI_ENDPOINT}/${residentID}`)
            .then(result => {

                var resident = result.data;
                logger.info('GET from MPI Resident Data');

                axios.get(`${process.env.MCS_PROTOCOL}${process.env.MCS_HOST}${process.env.MCS_ENDPOINT}/${messageCode}`, {
                  params: {
                    resident: { 
                      firstName: resident.firstName, 
                      lastName: resident.lastName
                    }
                  }
                })
                .then(result => {
                    // push to rabbitmq for SMS service to receive
                  //prefered is SMS, push to sms channel
                  //TODO: manipulate data format here,
                  //TODO: asynch function for combined data
                  //TODO: this should not be function call but amqp call thru url for docker purposes in future
                  logger.info('GET from Content API Data');

                    if (result.status == 200) {
                      var message = [{
                        recipient: resident.cellphoneNumber,
                        messageContent: result.data.content
                      }];

                      var amqpPublisher = require('../../notifications_publisher/server/server');
                      amqpPublisher.initSMSAMQP(JSON.stringify(message));
                    }
                })
                .catch(error => {
                  logger.error(error);
                });
            });

        //prefered is email, push to email channel


      }, {
        noAck: false 
      });
    });
  });
});