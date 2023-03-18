
import axios from "axios";
import queryString from 'query-string';
// import { queryString } from 'query-string';
const data = localStorage.getItem("data")
const token = JSON.parse(data).token;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// console.log(token)
const axiosClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "content-type": "application/json",
  },
  
  paramsSerializer : {
    serialize: (params) => {
        return queryString.stringify(params, { arrayFormat: 'repeat' })
    }
  }
  // paramsSerializer: (params) => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
