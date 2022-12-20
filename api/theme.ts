import axiosInstance from "./axiosInstance";
import { THEMES } from "./endPoints";

export const loadThemeListAPI = () => {
  return axiosInstance.get(THEMES);
};

export const addThemeAPI = (fromData: any) => {
  return axiosInstance.post(THEMES, fromData);
};
