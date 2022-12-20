import axios, { AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_WEEKANFARM
      : process.env.NEXT_PUBLIC_WEEKANFARM, //NOTE: 현재 Prod만 존재 Dev는 로컬에서 해결
  headers: {
    "x-request-host": "localhost:" + 3000,
  },
  withCredentials: true,
});

export default axiosInstance;
