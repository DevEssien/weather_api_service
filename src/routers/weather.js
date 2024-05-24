const router = require('express').Router();

const { cache } = require('../middleware/cache');
const { defineController } = require('../core/defineController');
const { WeatherApiService } = require('../services/weatherApi');

const { fetchCurrentWeatherReport } = WeatherApiService;

router.get('/:location', defineController({
  async controller(req, res, next) {
    const response = await fetchCurrentWeatherReport(req.params.location);
    req.return(response);
  }
}))
exports.weatherRoutes = router;