import axios from 'axios';

import axiosRequestConfig from '../config/Request';

const request = axios.create(axiosRequestConfig);

export default request;
