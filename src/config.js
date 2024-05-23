const dotenv = require('dotenv');

dotenv.config();

exports.Config = {
  app: {
    port: 8001
  },
  weatherApi: {
    key: process.env.WEATHER_API_KEY
  }
}