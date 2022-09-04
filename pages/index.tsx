import { useCallback, useEffect, useState } from "react";
import type { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";

import styled from "styled-components";

import useWindowDimensions from "hooks/useWindowDimensions";
import { loadCategoryListAPI } from "api/category";

import FarmCard from "components/ui/FarmCard";
import BaseLayout from "components/layout/BaseLayout";

import ImageCarousel from "components/ui/ImageCarousel";
import CategoryCarousel from "components/ui/CategoryCarousel";

import { colors } from "styles/productStyles";
import FarmListCarousel from "components/modules/farmMain/FarmListCarousel";
import FarmItem from "components/modules/farmMain/FarmItem";

const DynamicCategoryCarousel = dynamic(
  () => import("components/ui/CategoryCarousel"),
  { ssr: false }
);

const DynamicFarmListCarousel = dynamic(
  () => import("components/modules/farmMain/FarmListCarousel"),
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

  const onClickCategory = useCallback(
    (categoryId: number, sliderIndex: number) => {
      setSelectedCategory(categoryId);
    },
    [selectedCategory]
  );

  return (
    <BaseLayout>
      {/* TODO: 반응형처리 */}
      {/* <ImageCarousel /> */}

      <DynamicCategoryCarousel
        categoryList={dummyData}
        onClickCategory={onClickCategory}
        selectedCategory={selectedCategory}
      />

      <Title>제철농장 🥕</Title>

      {/* <FarmCardList> */}
      {/* <Link href={`/lunch`}>
          <a>
            <FarmCard />
          </a>
        </Link>
        <FarmCard /> */}

      <DynamicFarmListCarousel />
      {/* </FarmCardList> */}
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
  /* color: ${colors.GREY_MID}; */
`;

// const FarmCardList = styled.ul`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   justify-items: left;
//   margin-top: 50px;
// `;

// export const getServerSideProps: GetServerSideProps = async () => {
//   const fetchCategoryList = await loadCategoryListAPI();

//   const categoryList = fetchCategoryList.data.data;

//   return {
//     props: {
//       categoryList,
//     },
//   };
// };

export default Home;
