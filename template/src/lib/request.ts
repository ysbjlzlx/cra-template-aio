import axios from 'axios';

import useAccessTokenStore from '../stores/AccessTokenStore';

const client = axios.create({
  timeout: 5000,
});

client.interceptors.request.use(
  (config) => {
    const accessToken = useAccessTokenStore.getState().accessToken;
    if (accessToken !== undefined && accessToken !== null) {
      config.headers['Authorization'] = `Bearer ${accessToken.token}`;
    }
    return config;
  },
  (error) => {},
);

export default client;
