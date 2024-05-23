const { currentDate } = require('../../utils/index');

class WeatherApiUrl {
  constructor({state, country, dateTime, date, time, startDate, endDate, apiKey, currentDate}) {
    this.state = state;
    this.country = country;
    this.dateTime = dateTime;
    this.date = date;
    this.time = time;
    this.startDate = startDate;
    this.endDate = endDate;
    this.apiKey = apiKey;
    this.currentDate = currentDate;
  }
  get() {
    const date = this.date ?? this.startDate ?? this.currentDate;
    const location = `${this.state}, ${this.country}`;
    const endDate = `/${this.end}` ?? '';
    const $date = this.end ? `${date}/${endDate}`: `${date}`; 
    const dateTime = this.dateTime;
    if (this.time) {
      return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${dateTime}?key=${this.apiKey}` 
    }
    return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${$date}?key=${this.apiKey}`
  }
}

class Location {
  constructor({state, country}) {
    this.state = state;
    this.country = country;
  }
}

class WeatherApiUrlBuilder {
  constructor(location, apiKey) {
    this.apiKey = apiKey;
    // this.reset();
    this.location = location;
    this.currentDate = currentDate();
  }

  reset() {
    return new WeatherApiUrl();
  }

  getByCurrentDate() {
    // this.currentDate = moment().format('yyyy-mm-dd');
    return this;
  }

  getByDateTime({date, time}) {
    const $date =  date ?? this.currentDate;
    this.time = time;
    this.dateTime = `${$date}T${time}`
    return this;
  }

  getByDateRange(startDate, endDate) {
    this.startDate = startDate;
    this.endDate = endDate;
    return this;
  }

  build() {
    const { state, country } = this.location;
    const { dateTime, time, date, startDate, endDate, apiKey, currentDate } = this;
    const weatherApiUrl = new WeatherApiUrl({ time, apiKey, state, country, dateTime, date, startDate, endDate, currentDate });
    return weatherApiUrl;
  }
}

module.exports = {
  WeatherApiUrl,
  Location,
  WeatherApiUrlBuilder
}