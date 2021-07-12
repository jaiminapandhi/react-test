/* eslint-disable no-undef */
import axios from 'axios';

const timeout = process.env.NODE_ENV === 'development' ? 30000 : 12000;
const api = axios.create({
  Accept: '*/*',
  timeout,
  headers: { 'Content-Type': 'application/json' },
  // cookies: true,
  // withCredentials: true,
  responseType: 'json',
  // proxy: {
  //   host: "http://13.234.117.221",
  //   port: "1337",
  // },
  baseURL: 'http://13.127.19.204:3000/api/v1',
});

const tokenHeaders = (useToken) => {
  const jwt = localStorage.getItem('jwt');
  const headers = useToken ? { headers: { Authorization: jwt } } : {};
  return headers;
};

export const get = (url, useToken = true) => {
  const headers = tokenHeaders(useToken);
  return api.get(url, headers);
};

export const post = (url, data, useToken = true) => {
  const headers = tokenHeaders(useToken);
  return api.post(url, data, headers);
};

export const put = (url, data, useToken = true) => {
  const headers = tokenHeaders(useToken);
  return api.put(url, data, headers);
};

// Note: delete is a reserved word
export const remove = (url, useToken = true) => {
  const headers = tokenHeaders(useToken);
  return api.delete(url, headers);
};
