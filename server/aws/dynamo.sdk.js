const { v4: uuid } = require('uuid');
const DynamoService = require('../services/dynamo.service');

const saveIntoDynamoDB = async (name, email, messagereq, attemps) => {
    const message = {
        status: '',
        details: '',
        code: 200
    }

    if (!name || !email || !messagereq) {
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

    const user = {
      v: uuid(),
      id: uuid(),
      name: name,
      email: email.trim(),
      message: messagereq,
      createdAt: Date.now(),
    };
  
    try {
      const tableName = process.env.portfolioTableName;
      await DynamoService.write(user, tableName);
      message.status = 'success'; message.details = 'Successfully created into portfolioTable'; code = 200;  
      return message
    } catch (e) {
      console.log("====================error : ",e.message)
      const message = {
        status: 'failed',
        details: e.message,
        code : 500
      };      

      return message;
    }
};
  

module.exports = {
    saveIntoDynamoDB,
};