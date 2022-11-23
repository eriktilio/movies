import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// API Interceptors to Requests
api.interceptors.request.use(async (config) => {
  return config;
});

// API Interceptors to Responses
api.interceptors.response.use(undefined, function axiosRetryInterceptor(
  err: any
) {
  return Promise.reject(err);
});

export default api;
