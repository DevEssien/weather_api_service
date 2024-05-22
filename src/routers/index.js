const router = require('express').Router();
const { weatherRoutes } = require('./weather');

router.use('/weather', weatherRoutes);

exports.apiRoutes = router;