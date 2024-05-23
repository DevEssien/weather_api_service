const router = require('express').Router();
const { Test } = require('../services/test');

const { sample } = Test;

router.get('/test', (req, res, next) => {
  sample()
  return res.json({
    message: 'test'
  })
});

exports.weatherRoutes = router;