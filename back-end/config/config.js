/* eslint-disable max-len */

module.exports = {
  smtpConf: {
    host: "smtp.googlemail.com", // Gmail Host
    port: 465, // Port
    secure: true, // this is true as port is 465
    auth: {
      user: "test@gmail.com", // Gmail username
      pass: "password", // Gmail password
    },
  },
  webURL: "https://localhost:5100/",
};
