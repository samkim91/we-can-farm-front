import axiosInstance from "./axiosInstance";
import { THEMES } from "./endPoints";

export const loadThemeListAPI = () => {
  return axiosInstance.get(THEMES);
};
