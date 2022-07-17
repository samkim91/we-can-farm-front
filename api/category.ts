import axiosInstance from "./axiosInstance";

export const loadCategoryListAPI = () => {
  return axiosInstance.get("category/v2");
};
