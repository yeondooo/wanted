import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://pre-onboarding-selection-task.shop/',
  headers: {
    'Content-type': 'application/json',
  },
});

// 매 실행 시 토큰값 넣기, 없으면 null값이 들어간다
// api.interceptors.request.use(function (config) {
//   const access_token = localStorage.getItem('Authorization');
//   config.headers.common['Authorization'] = `${access_token}`;
//   return config;
// });
