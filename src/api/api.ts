import axios from 'axios';

const request = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

request.interceptors.request.use(
  (config) => {
    config.params = {
      ...config.params,
      appid: '5458f7fb3e170582a573cf98d46629f7', // personal api key
      units: 'metric',
    };
    return config;
  },
  (error) => Promise.reject(error)
);

export default request;
