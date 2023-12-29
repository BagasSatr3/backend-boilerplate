// /config/database.js
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  url: process.env.MONGODB_URI,
//   options: { useNewUrlParser: true, useUnifiedTopology: true },
};
