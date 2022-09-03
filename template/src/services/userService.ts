import request from '../aio/Request';

export const profile = () => {
  return request.get('/user/profile');
};
