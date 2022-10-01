import axiosInstance from "./axiosInstance";
import { FRAMS } from "./endpoints";

export const loadFarmListAPI = () => {
  return axiosInstance.get(FRAMS);
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
