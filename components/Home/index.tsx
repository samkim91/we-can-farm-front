import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import { useFarmList } from "queryClient/useFarms";
import { loadFarmListAPI } from "api/farm";

import Carousel from "components/ui/Carousel";
import { Title } from "./styles";
import FarmListCarousel from "./FarmListCarousel";
import CategoryCarousel from "components/ui/CategoryCarousel";
import { IFarm } from "./interface";

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

interface HomeProps {
  farmList: IFarm[];
}

function Home({ farmList }: HomeProps) {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const onClickCategory = useCallback(
    (categoryId: number) => {
      setSelectedCategory(categoryId);
    },
    [selectedCategory]
  );

  console.log("farmList", farmList);
  return (
    <>
      <Carousel />

      <DynamicCategoryCarousel
        categoryList={dummyData}
        onClickCategory={onClickCategory}
        selectedCategory={selectedCategory}
      />
      <Title>🥕 MD 추천</Title>

      <FarmListCarousel farmList={farmList} />
    </>
  );
}

export default Home;
