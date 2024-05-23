const router = require('express').Router();

const { defineController } = require('../core/defineController');
const { WeatherApiService } = require('../services/weatherApi');
const { requestToKey } = require('../utils/index');

const { fetchCurrentWeatherReport } = WeatherApiService;

router.get('/:location', defineController({
  async controller(req, res, next) {
    await requestToKey(req)
    const response = await fetchCurrentWeatherReport(req.params.location);
    req.return(response);
  }
}))
exports.weatherRoutes = router;