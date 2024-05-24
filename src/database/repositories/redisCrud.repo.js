const { Database, isRedisWorking } = require('../connection');
const client = Database.getInstance();

class RedisRepo {
  constructor(client) {
    this.client = client;
  }
  async writeData(key, data, options) {
    const client = this.client;
    if (!isRedisWorking()) throw new Error('Redis Failed to work');
    try {
      console.log('write data ', data, key, options)
      return await client.set(key, data, options);
    } catch (error) {
      console.log(error)
      console.error('failed to cache data for key ', key);  
    }
  }

  async readData(key) {
    if(!isRedisWorking()) throw new Error('Redis Failed to work');
    try {
      console.log(this.client)
      return await this.client.get(key)
    } catch (error) {
      console.error('Failed to read ', key);
      console.log(error)
    }
  }
}

exports.Client = new RedisRepo(client);