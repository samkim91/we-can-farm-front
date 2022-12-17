import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import Slider, { Settings } from "react-slick";
import useWindowDimensions from "hooks/useWindowDimensions";

import {
  Container,
  Title,
  DotWrapper,
  Item,
  ImageWrapper,
  Text,
  Wrapper,
} from "./styles";
import { ITheme } from "types/interface";

// const categoryAll = {
//   id: 0,
//   code: "ALL",
//   isActive: true,
//   name: "전체보기",
//   priority: 0,
//   themeAttachment: {
//     url: "/images/hepali.jpeg",
//   },
// };

interface CategoryCarouselProps {
  themeList: ITheme[];
  selectedCategory: number;
  onClickCategory: (categoryId: number, sliderCurrIndex: number) => void;
}

function CategoryCarousel({
  themeList,
  selectedCategory,
  onClickCategory,
}: CategoryCarouselProps) {
  const router = useRouter();
  const sliderRef = useRef<Slider | null>(null);
  const { windowWidth } = useWindowDimensions();

  const [state, setState] = useState({
    initialSlide: 0,
    sliderCurrIndex: 0,
    itemsTotalLength: 0,
  });
  const { initialSlide, itemsTotalLength, sliderCurrIndex } = state;

  // NOTE: 카테고리 슬라이더 셋팅
  const showItem = windowWidth >= 550 ? 8 : 4;
  const settings: Settings = {
    initialSlide,
    infinite: itemsTotalLength > showItem,
    speed: 500,
    swipe: true,
    dots: true,
    rows: 2,
    slidesPerRow: showItem,
    arrows: false,
    beforeChange: (prev, next) => {
      if (next < 0 && initialSlide > 0) return;
      setState((prevState) => ({
        ...prevState,
        sliderCurrIndex: next,
      }));
    },
    appendDots: (dots: string) => <DotWrapper>{dots}</DotWrapper>,
  };

  useEffect(() => {
    let index: any;

    const numberIndex = Number.parseInt(index, 10);
    if (!index) return;

    setState((prev) => ({
      ...prev,
      sliderCurrIndex: numberIndex,
      initialSlide: numberIndex,
    }));
  }, []);

  useEffect(() => {
    if (sliderCurrIndex > 0) {
      sliderRef.current?.slickGoTo(sliderCurrIndex);
    }

    if (themeList?.length)
      setState((prev) => ({
        ...prev,
        itemsTotalLength: themeList?.length,
      }));
  }, [sliderCurrIndex, themeList]);

  return (
    <Container>
      <Wrapper>
        {/* <Title>카테고리별로 찾아보세요</Title> */}
        <Slider {...settings} ref={sliderRef}>
          {
            // [categoryAll].concat

            themeList.map((theme) => (
              <Item
                key={theme.id}
                onClick={() => onClickCategory(theme.id, sliderCurrIndex)}
              >
                <ImageWrapper isSelected={theme.id === selectedCategory}>
                  {/* <Image
                  width={100}
                  height={100}
                  src={
                    theme.themeAttachment.url
                      ? theme.themeAttachment.url
                      : `/images/hepali.jpeg`
                  }
                  loading="eager"
                  priority={true}
                  alt="farm-theme-img"
                  quality={100}
                /> */}
                  <img src={theme.themeAttachment.url} alt="theme-img" />
                </ImageWrapper>

                <Text checked={theme.id === selectedCategory}>
                  {theme.name}
                </Text>
              </Item>
            ))
          }
        </Slider>
      </Wrapper>
    </Container>
  );
}

export default CategoryCarousel;
