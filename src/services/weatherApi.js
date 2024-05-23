const axios = require('axios');
const { AuthenticationError } = require("../libs/exceptions");
const { Location, WeatherApiUrlBuilder } = require('../libs/weatherApi/index');
class WeatherApiService {
  static async fetchCurrentWeatherReport($location) {
    const [state, country ] = $location.split(',')
    const location = new Location({state: state.trim(), country: country.trim()});
    
    const weatherApiUrlBuilder = new WeatherApiUrlBuilder(location, 'TM25LYCHPFD4NXU8M46LQGRB6');
    
    const weatherApiUrl = weatherApiUrlBuilder.getByCurrentDate().build();

    const response = await axios.get(weatherApiUrl.get())

    return {
      message: `Fetched Weather report for ${state}, ${country}`,
      data: response.data,
    } 
  }
}
exports.WeatherApiService = WeatherApiService;