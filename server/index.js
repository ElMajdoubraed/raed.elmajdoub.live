const serverless = require("serverless-http");
const express = require("express");
const DaynamoSDK = require('./aws/dynamo.sdk');
const LocalMail = require('./services/mailer.service');
//const VerifEmail = require('./services/verif.mail');
var cors = require('cors')
var bodyParser = require('body-parser');
const app = express();

app.use(cors('*'))
app.options('*', cors('*'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.post("/send", async (req, res, next) => {
  const { username, email, message, attemps = 0 } = req.body;
    const result = await DaynamoSDK.saveIntoDynamoDB(username, email, message, attemps);
    if (result.code === 200) {
      await LocalMail.sendLocalMail(username, email, message );
    }
    return res.json({
      code: result.code,
      status: result.status,
      details: result.details,
    });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
