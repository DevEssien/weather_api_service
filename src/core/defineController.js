const { defineResponse } = require('./defineResponse');

exports.defineController = function({ controller }) {
  return async function(req, res, next) {
    try {
      req.return = data => res.json(defineResponse(data));
      return await controller(req, res, next);
    } catch (error) {
      console.log(error)
    }
  }
}