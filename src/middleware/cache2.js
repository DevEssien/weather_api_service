const { Cache } = require('../database/repositories/redisCrud.repo');
const { isRedisWorking } = require('../database/connection');
const { requestToKey } = require("../utils");

exports.cache = (options) => {
  return async (req, res, next) => {
    if (!isRedisWorking()) throw new Error('Redis not connected');
    try {
      const key = await requestToKey(req);
      const cachedValue = await Cache.readData(key);
  
      if (cachedValue && cachedValue !== null) return res.json(cachedValue);
      else next()
    } catch (error) {
      console.log(error)
    }

  }
}