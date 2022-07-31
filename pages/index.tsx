import type { GetServerSideProps, NextPage } from "next";
import BaseLayout from "components/templates/BaseLayout";
import FarmCard from "components/atoms/FarmCard";
import styled from "styled-components";
import { colors } from "styles/productStyles";
import ImageCarousel from "components/atoms/ImageCarousel";
import SearchBox from "components/atoms/SearchBox";
import Link from "next/link";
import { loadCategoryListAPI } from "api/category";
import CategoryCarousel from "components/atoms/CategoryCarousel";
import { useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useWindowDimensions from "hooks/useWindowDimensions";

const DynamicCategoryCarousel = dynamic(
  () => import("components/atoms/CategoryCarousel"),
  { ssr: false }
);

const Title = styled.h1`
  font-size: 19px;
  margin-top: 30px;
  font-weight: 400;

  & > strong {
    color: ${colors.MAIN_COLOR};
  }
  /* color: ${colors.GREY_MID}; */
`;

const FarmCardList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: left;
  margin-top: 50px;
`;

const Home: NextPage = ({ categoryList }: any) => {
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
      <ImageCarousel />

      <DynamicCategoryCarousel
        categoryList={categoryList}
        onClickCategory={onClickCategory}
        selectedCategory={selectedCategory}
      />
      <Title>
        <strong>n</strong>
        개의 농장이 있습니다.
      </Title>

      <FarmCardList>
        <Link href={`/lunch`}>
          <a>
            <FarmCard />
          </a>
        </Link>
        <FarmCard />

        <FarmCard />
        <FarmCard />
        <FarmCard />
      </FarmCardList>
    </BaseLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const fetchCategoryList = await loadCategoryListAPI();

  const categoryList = fetchCategoryList.data.data;

  return {
    props: {
      categoryList,
    },
  };
};

export default Home;
