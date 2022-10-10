import React, { useEffect, useState } from "react";
import { Settings } from "react-slick";

import useWindowDimensions from "hooks/useWindowDimensions";

import FarmItem from "./FarmItem";

import { FarmList, StyledSlider } from "./styles";
import { sizes } from "styles/productStyles";
import { IFarm } from "../interface";

interface FarmListCarouselProps {
  farmList: IFarm[];
}

function FarmListCarousel({ farmList }: FarmListCarouselProps) {
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
    slidesToShow: showItem,
    slidesToScroll: 1,
    autoplay: true,
    rows: 1,
    speed: 1500,
    autoplaySpeed: 500,
    // cssEase: "ease-in",
    arrows: false,
  };

  return (
    <FarmList>
      <StyledSlider {...sliderOptions}>
        {farmList?.map((farm) => (
          <FarmItem
            key={farm.id}
            farmId={farm.id}
            name={farm.name}
            image={farm.images[0]}
            ownerNote={farm.ownerNotes}
          />
        ))}
      </StyledSlider>
    </FarmList>
  );
}

export default FarmListCarousel;
