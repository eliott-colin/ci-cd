import axios from "axios";

const api = axios.create({
  baseURL: "https://pokebuildapi.fr/api/v1",
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error);
    return Promise.reject(error);
  },
);

export default api;
