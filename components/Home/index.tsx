import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Carousel from "components/ui/Carousel";
import { Title } from "./styles";
import FarmListCarousel from "./FarmListCarousel";
import CategoryCarousel from "components/ui/CategoryCarousel";
import { IFarm, ITheme } from "./interface";

const DynamicCategoryCarousel = dynamic(
  () => import("components/ui/CategoryCarousel"),
  { ssr: false }
);

interface HomeProps {
  farmList: IFarm[];
  themeList: ITheme[];
}

function Home({ farmList, themeList }: HomeProps) {
  const [selectedCategory, setSelectedCategory] = useState<number>(0);

  const onClickCategory = useCallback(
    (categoryId: number) => {
      setSelectedCategory(categoryId);
    },
    [selectedCategory]
  );

  return (
    <>
      <Carousel />

      <DynamicCategoryCarousel
        themeList={themeList}
        onClickCategory={onClickCategory}
        selectedCategory={selectedCategory}
      />
      <Title>🥕 MD 추천</Title>

      <FarmListCarousel farmList={farmList} />
    </>
  );
}

export default Home;
