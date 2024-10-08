import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://backend.profferdeals.com/api/",
});

export default axiosInstance;
