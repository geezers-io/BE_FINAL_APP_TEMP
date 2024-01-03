import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';

const client = axios.create({
  baseURL: 'http://localhost:8082/v1',
  // baseURL: '/',
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

  return response.data.data ?? response.data;
}

client.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (!token) return config;
  if (config.headers) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});
client.interceptors.response.use(unwrapResponse);

type URLParams = Record<string, string>;
class ServerApiClient {
  private readonly url = 'http://localhost:8082';
  private readonly headers = {
    'Content-Type': 'application/json',
  };

  get(url: string, params?: URLParams) {
    return fetch(url, {
      headers: this.headers,
      method: 'GET',
    });
  }

  private createParams(p: URLParams) {
    const params = new URLSearchParams(p).toString();
  }
}

export default client;
