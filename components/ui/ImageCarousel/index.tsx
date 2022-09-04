import React, { useState, useEffect } from "react";
import sliderData from "./sliderData";
import SliderItem from "./SliderItem";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import {
  LeftArrows,
  RightArrows,
  ArrowWarpper,
  NumberWrapper,
  SlideContainer,
} from "./styles";

const ImageCarousel = () => {
  const len = sliderData.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  // NOTE: 자동넘김
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <SlideContainer>
      <SliderItem activeIndex={activeIndex} />

      <ArrowWarpper>
        <LeftArrows
          onClick={() =>
            setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
          }
        >
          <FaArrowAltCircleLeft />
        </LeftArrows>
        <RightArrows
          onClick={() =>
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
          }
        >
          <FaArrowAltCircleRight />
        </RightArrows>
      </ArrowWarpper>

      <NumberWrapper>
        {activeIndex + 1} / {sliderData.length}
      </NumberWrapper>
    </SlideContainer>
  );
};

export default ImageCarousel;
