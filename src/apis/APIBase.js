import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('authorization');
    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const APIBase = {
  get: (url, options) => instance.get(url, options),
  post: (url, data, options) => instance.post(url, data, options),
  put: (url, data, options) => instance.put(url, data, options),
  patch: (url, data, options) => instance.patch(url, data, options),
  delete: (url, options) => instance.delete(url, options),
};
