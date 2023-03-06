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
            subject: `Thank You for contacting me`,
            html: 
            `<b>Hello ${name}</b> 
            <div>
                <p>Thank you for contacting me, I will get back to you as soon as possible.</p>
            </div>
            <div>
                <b>Elmajdoub Raed.</b>
            </div>
            `
        });
    
        transporter.sendMail({
            from: 'raed@elmajdoub.live',
            to: 'raed@elmajdoub.live',
            subject: `${name} send a email`,
            html: `${email} send email via elmajdoub.live ${Date.now()}`,
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