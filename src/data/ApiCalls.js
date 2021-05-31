const axios = require('axios');

// for getting Weather from openweathermap full docs => @ https://openweathermap.org/current
export const getWeather = async () => {
  // checking for geolocation feature is available in the browser
  if (!'geolocation' in navigator) {
    return { error: true, msg: 'Browser Not Support Geolocation' };
  }

  // geting latitude and longitude by promis method
  const getCoords = async () => {
    try {
      const pos = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      return {
        long: pos.coords.longitude,
        lat: pos.coords.latitude,
      };
    } catch (error) {
      return error;
    }
  };

  const coords = await getCoords();

  // checking user action on location services
  if (coords.code == 1) {
    return { error: true, msg: 'User denied Geolocation' };
  }

  // api id for openweathermap
  const apiId = 'af4f73190d4cbbf3c785acda703e702c';

  // api calling using axios full docs => @ https://github.com/axios/axios
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${apiId}&units=metric`
    );
    if (response) return response.data;
  } catch (error) {
    return { error: true, msg: 'Server Error' };
  }
};

//for getting news from newsapi . full docs => @ https://newsapi.org/docs
export const getNews = async (data) => {
  let searchText = data.searchText ? data.searchText : 'kerala'; // Default text
  let lan = data.lang ? data.lang : 'ml'; // Default language
  let sort = data.sort ? data.sort : 'publishedAt'; // Default sort type

  // api key fo newsapi
  const apiKey = '39058ab800a24f65b6652d8c1bcb1c82';

  // api calling using axios full docs => @ https://github.com/axios/axios
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${searchText}&sortBy=${sort}&apiKey=${apiKey}&language=${lan}`
    );

    if (response) return response.data;
  } catch (error) {
    return { error: true, msg: 'Server Error' };
  }
};
