import React from "react";
import sliderData from "./sliderData";
import { SlideInfo, SlideActive, SlideTextWrapper } from "./styles";

interface SliderItemProps {
  activeIndex: number;
}

const SliderItem = ({ activeIndex }: SliderItemProps) => {
  return (
    <ul>
      {sliderData.map((slide, index) => (
        <SlideActive
          key={index}
          active={index === activeIndex ? "active" : "inactive"}
        >
          <SlideInfo>
            <img src={slide.urls} alt="slider_img" />
            <SlideTextWrapper>
              <h2>{slide.title}</h2>
              <div>{slide.category}</div>
              <div>{slide.contents}</div>
            </SlideTextWrapper>
          </SlideInfo>
        </SlideActive>
      ))}
    </ul>
  );
};

export default SliderItem;
