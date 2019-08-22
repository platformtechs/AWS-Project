import axios from 'axios';
// You can use any cookie library or whatever
// library to access your client storage.

const axiosGet = async () => {

  axios.interceptors.request.use(function (config) {
    const { data } = axios.post('');

    const token = localStorage.get(data.token);

    if (token != null) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  function (err) {
    return Promise.reject(err);
  })
}

export default axiosGet;
