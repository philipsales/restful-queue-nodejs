require('./config/config');

const express = require('express');
var cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const yargs = require('yargs');

const swaggerDocument = require('../swagger.json');
//var {mongoose} = require('./db/mongoose');
var notifications = require('../notifications/notifications');

const port = process.env.PORT;

var app = express();
app.use(cors())

app.use((req, res, next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    console.log(log);
    next();
});

app.use('/api-docs', 
        swaggerUi.serve, 
        swaggerUi.setup(swaggerDocument));

app.use('/notifications', notifications);

const argv = yargs.argv;
const command = process.argv[2];

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {
    app
}