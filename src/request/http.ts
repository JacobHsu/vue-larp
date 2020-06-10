import axios from "axios";
import { Toast } from "vant";
import { getToken, removeToken } from "@/utils/auth";
const server = axios.create({
  baseURL: process.env.VUE_APP_BASEURL
});
// Add a request interceptor
server.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (getToken()) {
      const key = "Authorization";
      config.headers[key] = getToken();
    }
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
server.interceptors.response.use(
  response => {
    // Do something with response data
    if (response.data.code === 50001 || response.data.code === 50002) {
      Toast({
        message: "未登录",
        className: "custom-toast",
        duration: 2000
      });
      removeToken();
      return response;
    } else {
      return response;
    }
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default server;
