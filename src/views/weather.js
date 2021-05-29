import React from 'react';
import { Row, Col } from 'react-bootstrap';

const weather_data = {
  coord: {
    lon: 76.2267,
    lat: 10.2589,
  },
  weather: [
    {
      id: 803,
      main: 'Clouds',
      description: 'broken clouds',
      icon: '04n',
    },
  ],
  base: 'stations',
  main: {
    temp: 26,
    feels_like: 26,
    temp_min: 26,
    temp_max: 26,
    pressure: 1011,
    humidity: 93,
    sea_level: 1011,
    grnd_level: 1011,
  },
  visibility: 10000,
  wind: {
    speed: 0.51,
    deg: 75,
    gust: 1.5,
  },
  clouds: {
    all: 70,
  },
  dt: 1622225059,
  sys: {
    type: 1,
    id: 9211,
    country: 'IN',
    sunrise: 1622161954,
    sunset: 1622207549,
  },
  timezone: 19800,
  id: 1266385,
  name: 'Kodungallūr',
  cod: 200,
};

export default function weather() {
  return (
    <div className='card card-w'>
      <div>26c</div>
      <h1>Weather</h1>
      <p>lsal maofniuh eijeir</p>
    </div>
  );
}
