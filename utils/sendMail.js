const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: process.env.GMAIL_HOST,
  secure: true,
  auth: {
    user: process.env.GMAIL_ID,
    pass: process.env.GMAIL_PASS
  }
});



module.exports= transporter