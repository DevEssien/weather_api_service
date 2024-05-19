const router = require('express').Router();

router.get('/test', (req, res, next) => {
  return res.json({
    message: 'test'
  })
});

exports.weatherRoutes = router;