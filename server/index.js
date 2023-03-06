const serverless = require("serverless-http");
const express = require("express");
const DaynamoSDK = require('./aws/dynamo.sdk');
const LocalMail = require('./services/mailer.service');
var bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "deployed from github actions",
  });
});

app.post("/send", async (req, res, next) => {
  const { username, email, message, attemps = 0 } = req.body;
  console.log(username, email, message);

  const result = await DaynamoSDK.saveIntoDynamoDB({ username, email, message, attemps });
  if (result.code === 200) {
    await LocalMail.sendLocalMail({ username, email, message });
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
