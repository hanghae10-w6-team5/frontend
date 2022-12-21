import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_URL,
});

// instance.interceptors.response.use(
//     (response) => {
//         return response;
//     },
//     (error) => {
//         const errorResponse = {
//             ...error.response.data,
//             status: error.response.status,
//         };
//         return Promise.reject(errorResponse);
//     }
// );

export default instance;
