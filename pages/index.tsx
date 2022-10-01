import { useCallback, useState } from "react";

import type { NextPage } from "next";
import dynamic from "next/dynamic";

import styled from "styled-components";
import { colors } from "styles/productStyles";

import { useFarmList } from "queryClient/useFarms";
import { loadFarmListAPI } from "api/farm";

import BaseLayout from "components/layout/BaseLayout";
import Carousel from "components/ui/Carousel";

const DynamicCategoryCarousel = dynamic(
  () => import("components/ui/CategoryCarousel"),
  { ssr: false }
);

const DynamicFarmListCarousel = dynamic(
  () => import("components/Home/FarmListCarousel"),
  { ssr: false }
);

const dummyData = [
  {
    id: 52,
    imageUrl:
      "https://assettest.soogong.co.kr/static/63727baa9bc2426a9a00c85e2153c763.svg",
    name: "냄새차단",
    nameEn: "promotion",
  },
  {
    id: 53,
    imageUrl:
      "https://assettest.soogong.co.kr/static/63727baa9bc2426a9a00c85e2153c763.svg",
    name: "냄새차단",
    nameEn: "promotion",
  },
  {
    id: 54,
    imageUrl:
      "https://assettest.soogong.co.kr/static/63727baa9bc2426a9a00c85e2153c763.svg",
    name: "냄새차단",
    nameEn: "promotion",
  },
  {
    id: 55,
    imageUrl:
      "https://assettest.soogong.co.kr/static/63727baa9bc2426a9a00c85e2153c763.svg",
    name: "냄새차단",
    nameEn: "promotion",
  },
  {
    id: 56,
    imageUrl:
      "https://assettest.soogong.co.kr/static/63727baa9bc2426a9a00c85e2153c763.svg",
    name: "냄새차단",
    nameEn: "promotion",
  },
];

const Home: NextPage = ({}: any) => {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  // const { data, isLoading, isFetching } = useFarmList();
  // const [farmList, setFarmList] = useState([]);
  // useEffect(() => {
  //   loadFarmListAPI().then((response) => {
  //     setFarmList(response.data);
  //   });
  // }, []);

  const onClickCategory = useCallback(
    (categoryId: number, sliderIndex: number) => {
      setSelectedCategory(categoryId);
    },
    [selectedCategory]
  );

  return (
    <BaseLayout>
      <Carousel />

      <DynamicCategoryCarousel
        categoryList={dummyData}
        onClickCategory={onClickCategory}
        selectedCategory={selectedCategory}
      />

      <Title>🥕 MD 추천</Title>
      <DynamicFarmListCarousel />
    </BaseLayout>
  );
};

const Title = styled.h1`
  font-size: 19px;
  margin-top: 30px;
  font-weight: 400;

  & > strong {
    color: ${colors.MAIN_COLOR};
  }
`;

export default Home;
