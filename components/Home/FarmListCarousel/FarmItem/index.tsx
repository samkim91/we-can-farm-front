import React, { useCallback, useEffect } from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import { FarmCardProps } from "components/Home/interface";

import {
  FarmCardContent,
  FarmCardTitle,
  FarmCategoryLabel,
  FarmItemContainer,
  FramCardContentsWrapper,
} from "./styles";

function FarmItem({ farmId, name, image, ownerNote }: FarmCardProps) {
  const router = useRouter();

  useEffect(() => {
    router.prefetch(`/detail${farmId}`);
  }, []);

  const onClickFarmItem = useCallback(() => {
    router.push(`/detail/${farmId}`);
  }, [router]);

  return (
    <FarmItemContainer onClick={onClickFarmItem}>
      <Image
        width={222}
        height={200}
        src={image ? image : `/images/hepali.jpeg`}
        loading="eager"
        priority={true}
        alt="farm-img"
        quality={100}
      />

      <FramCardContentsWrapper>
        <FarmCategoryLabel>
          <p>업종명</p>
        </FarmCategoryLabel>
        <FarmCardTitle>{name}</FarmCardTitle>
        <FarmCardContent>{ownerNote}</FarmCardContent>
      </FramCardContentsWrapper>
    </FarmItemContainer>
  );
}

export default FarmItem;
