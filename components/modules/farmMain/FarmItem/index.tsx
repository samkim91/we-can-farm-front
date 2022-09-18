import React, { useCallback } from "react";

import Image from "next/image";
import { useRouter } from "next/router";

import {
  FarmCardContent,
  FarmCardTitle,
  FarmCategoryLabel,
  FarmItemContainer,
  FramCardContentsWrapper,
} from "./styles";

function FarmItem() {
  const router = useRouter();

  const onClickFarmItem = useCallback(() => {
    // TODO: 동적으로 할당해야함
    router.push("/detail");
  }, [router]);

  return (
    <FarmItemContainer onClick={onClickFarmItem}>
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
        <FarmCardTitle>농장 제목</FarmCardTitle>
        <FarmCardContent>농장 내용</FarmCardContent>
      </FramCardContentsWrapper>
    </FarmItemContainer>
  );
}

export default FarmItem;
