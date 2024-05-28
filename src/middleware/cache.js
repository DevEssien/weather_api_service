
const { Cache } = require('../database/repositories/cache.repo')
const { requestToKey } = require('../utils/index');

async function cache(req, res, next) {
  const key = await requestToKey(req);
  req.cacheKey = key;
  const cachedValue =  await Cache.readData(key);
  if (cachedValue) return res.send(cachedValue)
  next()
}

exports.cache = cache;