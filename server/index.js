const serverless = require("serverless-http");
const express = require("express");
const DaynamoSDK = require('./aws/dynamo.sdk');
const LocalMail = require('./services/mailer.service');
const VerifEmail = require('./services/verif.mail');
var bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.post("/send", async (req, res, next) => {
  const { username, email, message, attemps = 0 } = req.body;
  if (VerifEmail.isValidEmail__(email) !== 'isValidEmail') {
    return res.json({
      code: 400,
      status: 'failed',
      details: 'Invalid email',
    });
  } else {
    const result = await DaynamoSDK.saveIntoDynamoDB(username, email, message, attemps);
    if (result.code === 200) {
      await LocalMail.sendLocalMail(username, email, message );
    }
    return res.json({
      code: result.code,
      status: result.status,
      details: result.details,
    });
  }

});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
