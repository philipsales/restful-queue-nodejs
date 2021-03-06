require('./config/config');

const express = require('express');
var cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const swaggerDocument = require('../swagger.json');
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

app.listen(port, () => {
    console.log(`Started on port ${process.env.HOST}:${port}`);
});

module.exports = {
    app
}