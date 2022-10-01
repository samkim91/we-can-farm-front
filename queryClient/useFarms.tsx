import { useQuery } from "@tanstack/react-query";
import { loadFarmListAPI } from "api/farm";
import { QueryKeys } from "./queryClient";

const useFarmList = () => {
  return useQuery([QueryKeys.FARM_LIST, loadFarmListAPI()]);
};

export { useFarmList };
