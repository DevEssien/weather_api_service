const NodeCache = require('node-cache');

class CacheRepo {
  constructor(cache){
    this.cache = cache; 
  }
  async writeData(key, data, options) {
    return new Promise((resolve, reject) => {
      try {
        const setCache = this.cache.set(key, data, options);
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
}

const cache = new NodeCache();

exports.Cache = new CacheRepo(cache);