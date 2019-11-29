const nodemailer = require("nodemailer");
function initEmailTransporter() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 587,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

export default initEmailTransporter;
