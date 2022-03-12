import request from './request';

export function profile() {
  return request.get('/profile');
}
