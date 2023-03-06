const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: "smtp.titan.email",
    port: 465,
    secure: true,
    auth: {
        user: "raed@elmajdoub.live",
        pass: "raedraed",
    },
});

const sendLocalMail = async ({name, email, message}) => {

  let info = transporter.sendMail({
        from: 'raed@elmajdoub.live',
        to: "raed.elmajdoub@gmail.com",
        subject: `Hello from ${name}`,
        text: "Hello world? my email is: " + email + " and my message is: " + message + "",
        html: "<b>Hello world?</b>",
  });

  transporter.sendMail({
    from: 'raed@elmajdoub.live',
    to: 'raed@elmajdoub.live',
    subject: `Hello from ${name}`,
    text: "Hello world? my email is: " + email + " and my message is: " + message + "",
    html: "<b>Hello world?</b>",
});

  if (!info) {
    throw new Error(`Unable to send email`);
  }
  return info;
};

module.exports = {
  sendLocalMail,
};