import axios from 'axios';

import { AxiosRequestConfig } from 'axios';
import useAccessTokenStore from '../stores/AccessTokenStore';

const axiosRequestConfig: AxiosRequestConfig = {
  timeout: 5000,
};

const client = axios.create(axiosRequestConfig);

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
