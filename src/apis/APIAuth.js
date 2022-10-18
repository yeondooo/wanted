import { APIBase } from './APIBase';

const APIAuth = {
  signUp(info) {
    const endpoint = '/auth/signup';
    return APIBase.post(endpoint, info);
  },

  signIn(info) {
    const endpoint = '/auth/signin';
    return APIBase.post(endpoint, info);
  },
};

export default APIAuth;
