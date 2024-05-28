const Redis = require('ioredis');

class Database {
  constructor() {
    this.client = new Redis();
    return this.connectToDb();
  }
 
  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }

  connectToDb() {
    try {
      if (this.client) console.log('- connected to redis successfully🎉')
     return this.client;
    } catch (error) {
      console.log(error);
    }
  }
}

exports.Database = Database;