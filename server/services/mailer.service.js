const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
        user: "raed@elmajdoub.com",
        pass: "XXXXXXX",
    },
});

const write = async (data, tableName) => {
  const params = {
    TableName: tableName,
    Item: data,
  };


    let info = transporter.sendMail({
        from: '"User" <test@domain.com>',
        to: "recipient@domain.com",
        subject: "Hello",
        text: "Hello world?",
        html: "<b>Hello world?</b>",
    });
  const result = await documentClient.put(params).promise();
  if (!result) {
    throw new Error(`Unable to write to dynamo table ${tableName}`);
  }
  return result;
};

module.exports = {
  write,
};