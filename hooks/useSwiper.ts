import React, { MutableRefObject, useCallback, useRef, useState } from "react";

function useSwiper(itemCount = 1) {
  const swiperRef = useRef() as MutableRefObject<HTMLDivElement>;

  const [slideIndex, setSlideIndex] = useState(0);

  const onClickNavButton = useCallback(
    (direction: number) => {
      const scrollDistance = swiperRef.current.offsetWidth;

      let resultSlideIndex = slideIndex + direction;

      if (resultSlideIndex >= itemCount) {
        resultSlideIndex = 0;
      }
      if (resultSlideIndex < 0) {
        resultSlideIndex = itemCount - 1;
      }

      setSlideIndex(resultSlideIndex);
      swiperRef.current.scrollTo({
        top: 0,
        left: resultSlideIndex * scrollDistance,
        behavior: "smooth",
      });
    },
    [itemCount, slideIndex]
  );

  return {
    swiperRef,
    onClickNavButton,
    slideIndex,
  };
}

export default useSwiper;
