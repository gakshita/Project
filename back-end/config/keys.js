/* eslint-disable max-len */

dbPasswordDev =
  // eslint-disable-next-line quotes
  "mongodb+srv://akshita:akshita15@cluster0.dabef.mongodb.net/test";

// for PRODUCTION
// const MONGO_USERNAME = 'sammy';
// const MONGO_PASSWORD = 'your_password';
// const MONGO_HOSTNAME = '127.0.0.1';
// const MONGO_PORT = '27017';
// const MONGO_DB = 'sharkinfo';

// const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

module.exports = {
  mongoURI: dbPasswordDev,
  // eslint-disable-next-line quotes
  secret: "yourSecretKey",
};
