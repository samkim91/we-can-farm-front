import axiosInstance from "./axiosInstance";
import { FRAMS } from "./endPoints";

export const loadFarmListAPI = (themePageParams: any) => {
  return axiosInstance.get(FRAMS, {
    params: { themePageParams },
  });
};

export const loadFarmAPI = (farmId: number) => {
  return axiosInstance.get(FRAMS + `/${farmId}`);
};

export const addFarmAPI = () => {
  return axiosInstance.post(FRAMS);
};

export const updateFarmAPI = (farmId: number) => {
  return axiosInstance.post(FRAMS + `/${farmId}`);
};
