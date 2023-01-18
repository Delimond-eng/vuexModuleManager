import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["Authorization"] = "Http token";
/* axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded"; */
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log(JSON.stringify(config.data));
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);
