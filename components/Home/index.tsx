import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import Carousel from "components/ui/Carousel";
import { FramListContainer, Title } from "./styles";
import FarmListCarousel from "./FarmListCarousel";
import CategoryCarousel from "components/ui/CategoryCarousel";
import { IFarm, ITheme } from "types/interface";
import FarmItem from "./FarmItem";

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

  console.log("farmList", farmList);

  const onClickCategory = useCallback(
    (categoryId: number, sliderCurrIndex: number, themeName: string) => {
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

      {/* <FarmListCarousel farmList={farmList} /> */}

      <FramListContainer>
        {/* {farmList.map((value) => (
          <FarmItem
            key={value.id}
            farmId={value.id}
            name={value.name}
            image={value.images[0]}
            ownerNote={value.ownerNotes}
          />
        ))} */}
      </FramListContainer>
    </>
  );
}

export default Home;
