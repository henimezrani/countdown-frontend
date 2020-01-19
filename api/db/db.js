require('dotenv').config();

module.exports = {
  DB: process.env.MONGODB_URI || 'mongodb://localhost:27017/countdownDB'
};