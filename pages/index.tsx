import { useEffect, useState } from "react";
import type { NextPage } from "next";

import BaseLayout from "components/layout/BaseLayout";
import Home from "components/Home";

// import { useFarmList } from "queryClient/useFarms";
import { loadFarmListAPI } from "api/farm";
import { loadThemeListAPI } from "api/theme";

import { IFarm, ITheme } from "components/Home/interface";

const HomePage: NextPage = () => {
  // const { data, isLoading, isFetching } = useFarmList();
  // console.log("farmList", data);

  const [farmList, setFarmList] = useState<IFarm[]>([]);
  const [themeList, setThemeList] = useState<ITheme[]>([]);

  useEffect(() => {
    loadThemeListAPI().then((response) => {
      setThemeList(response.data.content);
    });

    loadFarmListAPI().then((response) => {
      setFarmList(response.data.content);
    });
  }, []);

  return (
    <BaseLayout>
      <Home farmList={farmList} themeList={themeList} />
    </BaseLayout>
  );
};

export default HomePage;
