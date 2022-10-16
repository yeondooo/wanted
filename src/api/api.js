import axios from 'axios';

const access_token = localStorage.getItem('authorization');

export const api = axios.create({
  withCredentials: false,
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
  },
});

// if (access_token)
//   api.interceptors.request.use(function (config) {
//     config.headers.common['Authorization'] = `Bearer ${access_token}`;
//     return config;
//   });

export const todoApi = axios.create({
  withCredentials: false,
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
});
