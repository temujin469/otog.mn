const nodemailer = require("nodemailer");

module.exports = async (email, subject, text) => {
  try {

    const transporter = nodemailer.createTransport({
      host:process.env.SMTP_HOST,
      // service:process.env.EMAIL_SERVICE,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASS
      },
    });

   const info = await transporter.sendMail({
      from: process.env.FROM_USER,
      to: email,
      subject: subject,
      text: text,
      html: `<a href='${text}'>batalgaajuulgh</a>`,
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Имайл амжилттай илгээгдсэн");
  } catch (err) {
    console.log(err);
  }
};
