const { createClient } = require('redis');

class Database {
  constructor() {
    this.client = createClient()
    this.connectToRedis();
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance.client;
  }

  async connectToRedis() {
    try {
      const client = await this.client;
      console.log('cli ', Object.keys(client))
      client.on('connect', () => console.log("- Connected to Redis Successfully 🎉"));
      
      client.on('ready', () => console.log('- client connected to redis and ready to use ✈'));
      
      client.on('error', (error) => {
        console.log("Error:: Redis connection error");
        console.log(error)
      });
      
      client.on('end', () => console.log('client disconnected'));
      process.on('SIGINT', () => client.quit());
  
      await client.connect();
    } catch (error) {
      console.log(error);
    }
  }
}

exports.isRedisWorking = () => {
  if (!Database.getInstance()) return false;
  return true;
}

exports.Database = Database;