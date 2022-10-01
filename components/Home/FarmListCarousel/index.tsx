import React, { useEffect, useState } from "react";
import { Settings } from "react-slick";

import useWindowDimensions from "hooks/useWindowDimensions";

import FarmItem from "./FarmItem";

import { FarmList, StyledSlider } from "./styles";
import { sizes } from "styles/productStyles";

function FarmListCarousel() {
  //   const { width } = useWindowDimensions(0);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
      //   console.log(window.innerHeight, window.innerWidth);
    });
  }, []);

  const showItem = windowWidth >= 500 ? 4 : 2;

  const sliderOptions: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    rows: 1,
    speed: 2000,
    autoplaySpeed: 1500,
    // cssEase: 'ease-in',
    arrows: false, //NOTE: false를 안하면 모바일환경에서 공백이생김
  };

  return (
    <FarmList>
      <StyledSlider {...sliderOptions}>
        <FarmItem />
        <FarmItem />
        <FarmItem />
        <FarmItem />
      </StyledSlider>
    </FarmList>
  );
}

export default FarmListCarousel;
