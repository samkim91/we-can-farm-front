import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_SPRING_REST_API
      : process.env.NEXT_PUBLIC_SPRING_REST_API,
  headers: {
    "x-request-host": "localhost:" + process.env.PORT,
  },
  withCredentials: true,
});

export default axiosInstance;
