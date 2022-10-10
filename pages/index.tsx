import { useEffect, useState } from "react";

import type { NextPage } from "next";
import BaseLayout from "components/layout/BaseLayout";
import Home from "components/Home";
import { loadFarmListAPI } from "api/farm";
import { useFarmList } from "queryClient/useFarms";
import { IFarm } from "components/Home/interface";

const HomePage: NextPage = () => {
  // const { data, isLoading, isFetching } = useFarmList();
  // console.log("farmList", data);

  const [farmList, setFarmList] = useState<IFarm[]>([]);

  useEffect(() => {
    loadFarmListAPI().then((response) => {
      setFarmList(response.data.content);
    });
  }, []);

  return (
    <BaseLayout>
      <Home farmList={farmList} />
    </BaseLayout>
  );
};

export default HomePage;
