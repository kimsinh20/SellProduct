
import axios from "axios";
import queryString from 'query-string';
// import { queryString } from 'query-string';


//header jwt
let token;
  const data = localStorage.getItem("data")
  if(data !== null) {
    token = JSON.parse(data).token;
    // console.log(token)
  } else {
    token = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaW5oMjAwMiIsImlhdCI6MTY3OTIyMjU3NiwiZXhwIjoxNjc5MzA4OTc2fQ.Krl3h-NW3P8hFsTKqR-5vu7FqT9o1xhbIGXqb1xrL7M";
  }
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// console.log(data)
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
