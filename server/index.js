const serverless = require("serverless-http");
const express = require("express");
const app = express();

const { v4: uuid } = require('uuid');
const DynamoService = require('./services/dynamo.service');

Save = async (event) => {
  const { body = {} } = event;

  const { email = '', name = '', message = '' } = JSON.parse(body);

  const order = {
    v: uuid(),
    id: uuid(),
    name,
    email,
    message,
    createdAt: Date.now(),
  };

  try {
    const tableName = process.env.protfolioTable;
    await DynamoService.write(order, tableName);
    return { message: 'success' };
  } catch (e) {
    console.log('error', e);
    return { message: 'Failed to create into portfolioTable', error: e.message };
  }
};

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "deployed from github actions",
  });
});

app.get("/api", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from api!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
