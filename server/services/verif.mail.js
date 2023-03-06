const dns = require('dns');
const net = require('net');

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function checkEmailSMTP(email) {
    if (isValidEmail(email)) {
        const domain = email.split('@')[1];
        const mxRecords = [];
        const emailExists = new Promise((resolve, reject) => {
            dns.resolveMx(domain, (error, addresses) => {
                if (error || addresses.length === 0) {
                        return false            
                        } else {
                    mxRecords.push(...addresses);
                    resolve();
                }
            });
        }).then(() => {
        return new Promise((resolve, reject) => {
            const socket = net.createConnection(25, mxRecords[0].exchange);
            socket.setTimeout(5000);
            socket.on('timeout', () => {
                socket.destroy();
                    return false            
                });
            socket.on('error', () => {
                socket.destroy();
                    return false            
                });
            socket.on('connect', () => {
          socket.write(`HELO ${domain}\r\n`);
          socket.write(`MAIL FROM:<${email}>\r\n`);
          socket.write(`RCPT TO:<${email}>\r\n`);
        });
        let response = '';
        socket.on('data', (data) => {
          response += data.toString();
          if (response.includes('250')) {
            resolve(true);
          } else if (response.includes('550')) {
            return false
          }
          socket.end();
        });
      });
    });
    return emailExists;
  }
}

async function isValidEmail__ (email) {
    const isValid = await checkEmailSMTP(email)
    if(isValid === true) {
        return 'isValidEmail'
    }
    return 'isNotValidEmail'
}

module.exports = {
    isValidEmail__,
}