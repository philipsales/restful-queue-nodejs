require('./config/config');

const express = require('express');

const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');

const sms = require('../sms/sms');
const app = express();

app.use(cors())
app.use(compression())
app.use(helmet())

app.use((req, res, next) => {
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;
	console.log(log);
	next();
});

app.use('/api-docs', 
	swaggerUi.serve, 
	swaggerUi.setup(swaggerDocument));

app.use('/sms', sms);

app.listen(process.env.PORT, () => {
	console.log(`Started on port ${process.env.HOST}:${process.env.PORT}`);
});

module.exports = app;