import axios from 'axios';

import { getToken } from './token';

const instance = axios.create({
    baseURL: 'https://dev-jn.shop/',
});

instance.interceptors.request.use((config) => {
    config.headers['Content-Type'] = 'application/json; charset=utf-8';
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    config.headers['Accept'] = '*/*';
    config.headers['authentication'] = getToken();
    return config;
});

export default instance;
