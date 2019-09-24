require("./config/config");

const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger.json");
const email = require("../email/email");
const port = process.env.PORT;
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  next();
});

app.use("/email_api_docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/email", email);

app.listen(port, () => {
  console.log(`Started on port ${process.env.HOST}:${port}`);
});

module.exports = app;
