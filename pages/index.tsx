import { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";

import BaseLayout from "components/layout/BaseLayout";
import Home from "components/Home";

// import { useFarmList } from "queryClient/useFarms";
import { loadFarmListAPI } from "api/farm";
import { loadThemeListAPI } from "api/theme";
import { IFarm, ITheme } from "types/interface";

const initialThemeParams = {
  page: 0,
  size: 30,
  search: "사과",
};

const HomePage: NextPage = () => {
  // const { data, isLoading, isFetching } = useFarmList();
  // console.log("farmList", data);

  const [farmList, setFarmList] = useState<IFarm[]>([]);
  const [themeList, setThemeList] = useState<ITheme[]>([]);
  const [themePageParams, setThemePageParams] = useState(initialThemeParams);

  useEffect(() => {
    loadThemeListAPI().then((response) => {
      setThemeList(response.data.data);
    });

    loadFarmListAPI(themePageParams).then((response) => {
      setFarmList(response.data.data);
    });
  }, []);

  const onClickTheme = useCallback(() => {}, []);

  return (
    <BaseLayout>
      <Home farmList={farmList} themeList={themeList} />
    </BaseLayout>
  );
};

export default HomePage;
