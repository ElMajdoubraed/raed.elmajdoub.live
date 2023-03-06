const { v4: uuid } = require('uuid');
const DynamoService = require('../services/dynamo.service');

module.exports.saveIntoDynamoDB = async ({name, email, message, attemps}) => {
    const message = {
        status: '',
        details: '',
        code: 200
    }

    if (!name || !email || !message) {
        message.status = 'failed';
        message.details = 'Missing required parameters';
        message.code = 400;
        return message;
    }

    if (attemps > 5) {
        message.status = 'failed';
        message.details = 'Maximum attemps reached';
        message.code = 400;
        return message;
    }

    const order = {
      v: uuid(),
      id: uuid(),
      name: name,
      email: email.trim(),
      message: message,
      createdAt: Date.now(),
    };
  
    try {
      const tableName = process.env.protfolioTable;
      await DynamoService.write(order, tableName);
      message.status = 'success'; message.details = 'Successfully created into portfolioTable'; code = 200;  
      return message
    } catch (e) {
      const message = {
        status: 'failed',
        details: e.message,
        code : 500
      };      

      return message;
    }
};
  