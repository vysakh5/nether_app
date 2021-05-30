const axios = require('axios');

export const getWeather = async () => {
  if (!'geolocation' in navigator) {
    return { error: true, msg: 'Browser Not Support Geolocation' };
  }

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

  if (coords.code == 1) {
    return { error: true, msg: 'User denied Geolocation' };
  }

  console.log('🔥✨✨', coords);

  const apiId = 'af4f73190d4cbbf3c785acda703e702c';
  let lat = '10.258941';
  let lon = '76.226715';
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.long}&appid=${apiId}&units=metric`
    );
    if (response) return response.data;
  } catch (error) {
    return { error: true, msg: 'Server Error' };
  }
};
