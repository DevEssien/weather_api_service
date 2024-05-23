const { createClient } = require('redis');

class Database {
  constructor() {
    this.connectToRedis();
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  async connectToRedis() {
    const client = createClient();
    client.on('connect', () => console.log("- Connected to Redis Successfully 🎉"));
    
    client.on('ready', () => console.log('- client connected to redis and ready to use ✈'));
    
    client.on('error', (error) => {
      console.log("Error:: Redis connection error");
      console.log(error)
    });
    
    client.on('end', () => console.log('client disconnected'));
    process.on('SIGINT', () => client.quit());

    await client.connect();
  }
}

exports.Database = Database;