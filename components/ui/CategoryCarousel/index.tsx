import React, { useState, useEffect, useRef } from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useRouter } from "next/router";

import {
  Container,
  Title,
  DotWrapper,
  Item,
  ImageWrapper,
  Text,
  Wrapper,
} from "./styles";

interface CategoryCarouselProps {
  categoryList: any[];
  selectedCategory: number;
  onClickCategory: (categoryId: number, sliderCurrIndex: number) => void;
}

const categoryAll = {
  createdAt: "",
  name: "전체보기",
  nameEn: "all",
  id: 0,
  imageUrl: "/images/category/knowHow/all.png",
};

function CategoryCarousel({
  categoryList,
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

    // if (categoryType === "guide") {
    //   index = sessionStorage.getItem("knowhowSliderIndex") || "0";
    // }

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

    if (categoryList?.length)
      setState((prev) => ({
        ...prev,
        itemsTotalLength: categoryList?.length,
      }));
  }, [sliderCurrIndex, categoryList]);

  return (
    <Container>
      <Wrapper>
        {/* <Title>카테고리별로 찾아보세요</Title> */}
        <Slider {...settings} ref={sliderRef}>
          {[categoryAll].concat(categoryList).map((value) => (
            <Item
              onClick={() => onClickCategory(value.id, sliderCurrIndex)}
              key={value.id}
            >
              <ImageWrapper isSelected={value.id === selectedCategory}>
                {/* <Image
                  width="100"
                  height="100"
                  src={`images/hepali.jpeg`}
                  loading="eager"
                  priority={true}
                  alt="farm_category_img"
                  quality={100}
                /> */}
                <img src={`images/hepali.jpeg`} alt="category_img" />
              </ImageWrapper>
              {/* <Text checked={value.id === selectedCategory}>{value.name}</Text> */}
              <Text checked={value.id === selectedCategory}>카테고리</Text>
            </Item>
          ))}
        </Slider>
      </Wrapper>
    </Container>
  );
}

export default CategoryCarousel;
