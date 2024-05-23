const { createClient } = require('redis');
const redis = require('redis')

// function connectToDb() {
//   try {
//     const client = createClient({
//       port: 6379,
//       host: '127.0.0.1'
//     });
//     client.on('connect', () => console.log("- Connected to Redis Successfully 🎉"));
//     client.on('ready', () => console.log('client connected to redis and ready to use'))
//     client.on('error', (error) => {
//       console.log("Error:: Redis connection error");
//       console.log(error)
//     });
//     console.log('here');

//     client.on('end', () => console.log('client disconnected'));
//     process.on('SIGINT', () => client.quit());
//     return client;
//   } catch (error) {
//     console.log(error)
//   }
// // }

// exports.DatabaseConnect = connectToDb;
const client = createClient(
  // {
  // port: 6379,
  // host: '127.0.0.1'
// }
);
client.on('connect', () => console.log("- Connected to Redis Successfully 🎉"));
client.on('ready', () => console.log('client connected to redis and ready to use'))
client.on('error', (error) => {
  console.log("Error:: Redis connection error");
  console.log( 'error', error)
});
console.log('here');

client.on('end', () => console.log('client disconnected'));
process.on('SIGINT', () => client.quit());

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