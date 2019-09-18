'use strict';

const file = require('../logger/util/filename');
const logPath = process.env.LOG_PATH;
console.log("LOGPATH----", logPath);

const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, prettyPrint } = format;

const logger = createLogger({
    format: format.combine(
      format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      format.errors({ stack: true }),
      format.splat(),
      format.printf(
        info => `${info.timestamp} ${info.ipAddress} ${info.level} ${info.service} ${info.sourceFile} ${info.message}`
      ),
    ),
    defaultMeta: { 
      ipAddress: process.env.HOST,
      service: 'graphql'
    },
    level: 'info',
    transports: [
      new transports.File({ 
        filename: logPath + 'error.log' ,
        level: 'error' 
      }),
      new transports.File({ 
        filename: '../' + logPath + 'error.log',
        level: 'error' 
      }),
      new transports.File({ 
        filename: logPath + 'warning.log', 
        level: 'warn' 
      }),
      new transports.File({ 
        filename: logPath + 'combined.log' 
      }),
      new transports.File({ 
        filename: '../' + logPath + 'combined.log' 
      })
    ]
  });
  
  module.exports = { logger, file }