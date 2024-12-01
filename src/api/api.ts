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
      appid: import.meta.env.VITE_APP_ID,
      units: 'metric',
    };
    return config;
  },
  (error) => Promise.reject(error)
);

export default request;
