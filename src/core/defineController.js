const { defineResponse } = require('./defineResponse');
const { Cache } = require('../database/repositories/cache.repo');

exports.defineController = function({ controller }) {
  return async function(req, res, next) {
    try {
      req.return = async data => {
        await Cache.writeData(req.cacheKey, data);
        res.json(defineResponse(data));
      }
      return await controller(req, res, next);
    } catch (error) {
      console.log(error)
    }
  }
}