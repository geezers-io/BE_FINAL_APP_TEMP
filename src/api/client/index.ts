import axios, { AxiosResponse } from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:8082',
  timeout: 5000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

function unwrapResponse(response: AxiosResponse) {
  if (response.data instanceof Blob) {
    return response.data;
  }
  if (response.data !== '' && response.data.code !== 'OK') {
    return Promise.reject(response.data);
  }
  return response.data.data ?? response.data;
}

client.interceptors.response.use(unwrapResponse);

export default client;
