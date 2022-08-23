const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
  try {
    let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email", //process.env.EMAIL_HOST,
      // service:process.env.EMAIL_SERVICE,
      port: Number(process.env.EMAIL_PORT),
      secure: false,
      auth: {
        // user:process.env.EMAIL_USER,
        // pass:process.env.EMAIL_PASS
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

   const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      text: text,
      html: "<b>Hello world?</b>",
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    console.log("Имайл амжилттай илгээгдсэн");
  } catch (err) {
    console.log(err);
  }
};
