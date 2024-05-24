const router = require('express').Router();
const { Cache } = require('../database/repositories/cache.repo');
const { requestToKey } = require('../utils/index');

async function cache(req, res, next) {
  const key = await requestToKey(req);
  req.cacheKey = key;
    const cachedValue =  await Cache.readData(key);
    if (cachedValue){ 
      console.log('cached value ', key, cachedValue)
      return res.send(cachedValue);}
    next()
}

router.get('/', cache, async (req, res, next) => {
  console.log('here')
  const user = { 
    name: 'Essien',
    email: 'essien@gmail.com'
  }
  const userFields = Object.keys(user);
  await Cache.writeData(req.cacheKey, user);
  return res.json({
    message: 'Fetched user fields',
    data: userFields
  });
});

exports.testRoute = router;