import React from "react";

import useSwiper from "hooks/useSwiper";

import {
  CarouselContainer,
  CarouselContents,
  CarouselLeftNavigator,
  CarouselRightNavigator,
  CarouselWrapper,
  Dot,
  DotWrapper,
} from "./styles";
import NavRightChevron from "public/icons/NavRightChevron";
import NavLeftChevron from "public/icons/NavLeftChevron";

const defaultProps = {
  items: [
    {
      description: "A Item",
      imgae: "/images/hepali.jpeg",
    },
    {
      description: "B Item",
      imgae: "/images/hepali.jpeg",
    },
    {
      description: "C Item",
      imgae: "/images/hepali.jpeg",
    },
  ],
};

// NOTE: 임시
interface CarouselProps {
  items: {
    description: string;
    imgae: string;
  };
}

function Carousel({ items = defaultProps.items }) {
  const { swiperRef, slideIndex, onClickNavButton } = useSwiper(items?.length);

  return (
    <CarouselContainer>
      <CarouselWrapper ref={swiperRef}>
        {items.map((item, index) => (
          <CarouselContents key={index}>
            <img src={item?.imgae} alt={item.description} />
            <br />
            <p> {item.description}</p>
          </CarouselContents>
        ))}
      </CarouselWrapper>

      <CarouselLeftNavigator onClick={() => onClickNavButton(-1)}>
        <NavLeftChevron width={24} height={24} />
      </CarouselLeftNavigator>
      <CarouselRightNavigator onClick={() => onClickNavButton(1)}>
        <NavRightChevron width={24} height={24} />
      </CarouselRightNavigator>

      <DotWrapper>
        {Array(items.length)
          .fill(0)
          .map((_, index) => (
            <Dot isActive={index === slideIndex} key={index} />
          ))}
      </DotWrapper>
    </CarouselContainer>
  );
}

export default Carousel;
