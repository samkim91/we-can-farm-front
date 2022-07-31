import React from "react";

import Image from "next/image";

import { FarmCardContainer, FarmCardContent, FarmCardTitle } from "./styles";

function FarmCard() {
  return (
    <FarmCardContainer>
      {/* <Image
        width={222}
        height={200}
        src={`http://localhost:3000/images/hepali.jpeg`}
        loading="eager"
        priority={true}
        alt="farm_main_img"
        quality={100}
      /> */}

      <img src={`images/hepali.jpeg`} />

      <FarmCardContent>수박 ,체리 | 구로구</FarmCardContent>
      <FarmCardTitle>아침밥농원</FarmCardTitle>
      <FarmCardContent>아침밥농원 짱맛있음</FarmCardContent>
    </FarmCardContainer>
  );
}

export default FarmCard;
