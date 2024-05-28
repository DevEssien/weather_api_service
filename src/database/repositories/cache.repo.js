const { Database } = require('../connection');

class CacheRepo {
  constructor(cache){
    this.cache = cache; 
  }
  async writeData(key, data) {
    return new Promise(async (resolve, reject) => {
      try {
        const datatoJson = JSON.stringify(data);
        const setCache = this.cache.set(key, datatoJson, "EX", 60);
        if (!setCache) return reject(false);
        return resolve(setCache);
      } catch (error) {
        console.log(error)
        console.error('failed to cache data for key ', key);  
      }

    }); 
  }

  async readData(key) {
    return new Promise((resolve, reject) => {
      const retrivedData = this.cache.get(key);
      try {
        if (retrivedData === undefined) return reject(undefined);
        return resolve(retrivedData);
      } catch (error) {
        console.error('Failed to read ', key);
        console.log(error)
      }
    })
  }
 
  async deleteData(key) {
    return new Promise((resolve, reject) => {
      const deletedData = this.cache.del(key);
      try {
        if (!deletedData ) return reject(undefined);
        return resolve(deletedData);
      } catch (error) {
        console.error('Failed to delete ', key);
        console.log(error)
      }
    })
  }
}

const cache = Database.getInstance();

exports.Cache = new CacheRepo(cache);