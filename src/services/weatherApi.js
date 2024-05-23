const axios = require('axios');
const { AuthenticationError } = require("../libs/exceptions");
const { Location, WeatherApiUrlBuilder } = require('../libs/weatherApi/index');
const { Config } = require('../config');

const { key: apiKey} = Config.weatherApi

class WeatherApiService {
  static async fetchCurrentWeatherReport($location) {
    const [state, country ] = $location.split(',')
    const location = new Location({state: state.trim(), country: country.trim()});
    
    const weatherApiUrlBuilder = new WeatherApiUrlBuilder(location, apiKey);
    
    const weatherApiUrl = weatherApiUrlBuilder.getByCurrentDate().build();

    const response = await axios.get(weatherApiUrl.get())

    return {
      message: `Fetched Weather report for ${state}, ${country}`,
      data: response.data,  
    } 
  }
}
exports.WeatherApiService = WeatherApiService;