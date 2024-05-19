const { createClient } = require('redis');

function connectToDb() {
  const client = createClient();
  client.on('error', () => "Error:: Redis connection error");
  client.on('connect', () => "- Connected to Redis Successfully 🎉");
}

exports.DatabaseConnect = connectToDb;