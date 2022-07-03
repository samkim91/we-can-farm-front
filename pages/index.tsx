import type { NextPage } from "next";
import BaseLayout from "components/templates/BaseLayout";
import FarmCard from "components/atoms/FarmCard";
import styled from "styled-components";
import { colors } from "styles/productStyles";
import ImageCarousel from "components/atoms/ImageCarousel";
import SearchBox from "components/atoms/SearchBox";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <ImageCarousel />
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

export default Home;
