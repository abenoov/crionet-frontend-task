import request from 'axios';

// request.defaults.baseURL = import.meta.env.BASE_URL;
request.defaults.headers.common['Content-Type'] = 'application/json';
request.defaults.headers.common.Accept = 'application/json';

request.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

request.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default request;
