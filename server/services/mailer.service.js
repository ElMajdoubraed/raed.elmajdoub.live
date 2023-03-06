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

const sendLocalMail = async (name, email, message) => {
    let info;
    
    try {
        info = transporter.sendMail({
            from: 'raed@elmajdoub.live',
            to: email,
            subject: 'Thank You for Contacting Me',
            html: `<p>Hello ${name} </p><br>
                   <p>Thank you for contacting. I have received your message and will get back to you as soon as possible.</p>
                   <p>Best regards,</p>
                   <p>ELMajdoub Raed</p>`
        });
    
        transporter.sendMail({
            from: 'raed@elmajdoub.live',
            to: 'raed@elmajdoub.live',
            subject: `${name} contact Us Request`,
            html: `<p>Hello,</p><br>
                  <p>A user has submitted a contact us request with the following information:</p>
                  <p>Name: <strong>${name}</strong></p>
                  <p>Email: <strong>${email}</strong></p>
                  <p>Message: <strong>${message}</strong></p>
                  <p>Best regards,</p>
                  <p>ElMajdoub Raed</p> `
        });
    } catch (e) {   
        throw new Error(`Unable to send email`);
    }
 

  if (!info) {
    throw new Error(`Unable to send email`);
  }
  return info;
};

module.exports = {
  sendLocalMail,
};