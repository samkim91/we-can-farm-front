import React from "react";
import Image from "next/image";

import {
  FarmCardContent,
  FarmCardTitle,
  FarmCategoryLabel,
  FarmItemContainer,
  FarmRankingLabel,
  FramCardContentsWrapper,
} from "./styles";

function FarmItem() {
  return (
    <FarmItemContainer>
      <FarmRankingLabel>
        <p>1</p>
      </FarmRankingLabel>
      <Image
        width={222}
        height={200}
        src="/images/hepali.jpeg"
        loading="eager"
        priority={true}
        alt="farm_main_img"
        quality={100}
      />

      <FramCardContentsWrapper>
        <FarmCategoryLabel>
          <p>업종명</p>
        </FarmCategoryLabel>
        <FarmCardTitle>내가 잘나감요</FarmCardTitle>
        <FarmCardContent>
          애응애응애응 품질은 매우중요합니다 네네네네
        </FarmCardContent>
      </FramCardContentsWrapper>
    </FarmItemContainer>
  );
}

export default FarmItem;
