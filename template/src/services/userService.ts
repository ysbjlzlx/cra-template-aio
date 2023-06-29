import client from '../lib/request';

export const profile = () => {
  return client.get('/user/profile');
};
