const router = require('express').Router();

const { defineController } = require('../core/defineController');
const { WeatherApiService } = require('../services/weatherApi');

const { fetchCurrentWeatherReport } = WeatherApiService;

// router.get('/:location/', async (req, res, next) => {
//   const data = await fetchCurrentWeatherReport(req.params.location)
//   return res.status(200).json({
//     message: 'fetched data',
//     data: data
//   })
// });
router.get('/:location', defineController({
  async controller(req, res, next) {
    console.log()
    const response = await fetchCurrentWeatherReport(req.params.location);
    req.return(response);
  }
}))
exports.weatherRoutes = router;