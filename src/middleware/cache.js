const { Cache } = require('../database/repositories/redisCrud.repo');
const { isRedisWorking } = require('../database/connection');
const { requestToKey } = require("../utils");

exports.cache = (options = { EX: 21600 }) => {
  if (!isRedisWorking()) throw new Error('Redis not connected');
  else console.log('- connected')
  return async (req, res, next) => {
    console.log('caching ')
    console.log('here')
    const key = await requestToKey(req);
    const cachedValue = await Cache.readData(key);
    if (cachedValue) {
      console.log('catched value is found')
      try {
        return res.json(JSON.parse(cachedValue));
      } catch (error) {
        console.log('error so res.send')
        return res.send(cachedValue);
      }
    }
    console.log('cached value not found so we proceeded');
    const oldSendFn = res.send;
    console.log('oldSend function', JSON.stringify(oldSendFn))
    res.send = async (data) => {
      console.log('data ', data)
      res.send = oldSendFn;
      if (res.statusCode.startsWith('2')){ 
        console.log('res.statusCode starts with 2')
        await Cache.writeData(key, data, options);}
      return res.send(data)
    }
    next();
  }
} 