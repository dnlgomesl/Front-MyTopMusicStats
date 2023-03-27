import axios from "axios";

const tccApi = axios.create({
  baseURL: process.env.TCC_API,
});

tccApi.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
tccApi.defaults.headers.post["Content-Type"] = "application/json";

tccApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      window.location = "/session/signin";
    }
    throw error;
  }
);

export default tccApi;
