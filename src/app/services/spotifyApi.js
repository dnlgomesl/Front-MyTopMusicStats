import axios from "axios";

const spotifyApi = axios.create({
    baseURL: process.env.SPOTIFY_API,
});

spotifyApi.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
spotifyApi.defaults.headers.post["Content-Type"] = "application/json";

spotifyApi.interceptors.response.use(
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

export default spotifyApi
  