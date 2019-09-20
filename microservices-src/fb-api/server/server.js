require('./config/config');

const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const fb = require('../fb/fb');
const port = process.env.PORT;
const app = express();
//For testing only
//const ngrok = require('ngrok');

fb.subRouter.restUrl = "http://172.104.181.7:3004";
//fb.subRouter.restUrl = "http://localhost:3004";

app.use(cors())

app.engine('html', require('ejs').renderFile); 

app.use((req, res, next) => {
	var now = new Date().toString();
	var log = `${now}: ${req.method} ${req.url}`;
	console.log(log);
	next();
});

app.use('/api-docs', 
	swaggerUi.serve, 
	swaggerUi.setup(swaggerDocument));

app.use('/fb', fb.subRouter);

app.listen(port, () => {
	console.log(`Started on port ${process.env.HOST}:${port}`);
});

//For testing only
/*(async function() {
    const url = await ngrok.connect(3004);
    console.log(url);
    fb.subRouter.restUrl = url;
})();*/
module.exports = app;