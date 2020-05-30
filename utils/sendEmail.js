"use strict";
const nodemailer = require("nodemailer");


async function sendEmail(fromEmail, name, surname, body){
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: "game.eburamazan@gmail.com", // generated ethereal user
          pass: "GameEbu9576.", // generated ethereal password
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: 'game.eburamazan@gmail.com', // sender address
        to: "ramazancetinn@yandex.com", // list of receivers
        subject: "Contact", // Subject line
        text: `
                FROM: ${fromEmail}
                NAME: ${name}
                SURNAME: ${surname}

                MESSAGE
                ___________________
                ${body}
        `, // plain text body
      });
}

module.exports = sendEmail
