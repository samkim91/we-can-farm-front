import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_WEEKANFARM_DEV
      : process.env.NEXT_PUBLIC_WEEKANFARM_DEV,
  headers: {
    "x-request-host": "localhost:" + 3000,
  },
  withCredentials: true,
});

export default axiosInstance;
