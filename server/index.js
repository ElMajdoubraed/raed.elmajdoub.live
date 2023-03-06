const serverless = require("serverless-http");
const express = require("express");
const saveIntoDynamoDB = require('./aws/dynamo.sdk')
const app = express();

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "deployed from github actions",
  });
});

app.post("/send", (req, res, next) => {
  const { name, email, message, attemps } = req.body;
  const result = saveIntoDynamoDB({ name, email, message, attemps });
  return res.status(result.code).json({
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
