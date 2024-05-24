const router = require('express').Router();
const { weatherRoutes } = require('./weather');
const { testRoute } = require('./test');

router.use('/weather', weatherRoutes);
router.use('/test', testRoute)

exports.apiRoutes = router;