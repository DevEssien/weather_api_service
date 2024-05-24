const router = require('express').Router();
const { Client } = require('../database/repositories/redisCrud.repo');
const { requestToKey } = require('../utils/index');
const { isRedisWorking } = require('../database/connection');

router.use(async function (req, res, next) {
  try {
    if(!isRedisWorking()) throw new Error('Redis not connected');
    const key = await requestToKey(req);
    const cachedValue = await Client.readData(key);
    console.log('cached value', cachedValue)
    if (cachedValue) return res.send(cachedValue);
    let oldSend = res.send
    res.send = async function (data) {
      const targetedData = JSON.parse(data).data;
      const dataInJson = JSON.stringify(targetedData);
      if (`${res.statusCode}`.startsWith('2')) await Client.set(key, dataInJson, { EX: 21600});
      
      oldSend.apply(res, arguments);
  }
  next();
    
  } catch (error) {
    console.log(error)
  }
});

router.use('/', (req, res, next) => {
  const user = { 
    name: 'Essien',
    email: 'essienemma300@gmail.com'
  }
  const userFields = Object.keys(user);
  return res.json({
    message: 'Fetched user fields',
    data: userFields
  });
});

exports.testRoute = router;