import React from "react";

import Chip from "components/ui/Chip";

import { FarmInfoContainer } from "../styles";
import { HashTagWrapper } from "./styles";

function FarmIntroduce() {
  return (
    <FarmInfoContainer>
      <h1>농장 소개</h1>

      <p>
        양수리 두물머리에서 딸기농사만을 전문적으로 짓는 딸기 체험
        전문농장입니다. 유치원, 어린이집 체험학습 전문...
      </p>

      <HashTagWrapper>
        <Chip label="#칩컴포넌트0" />
        <Chip label="#칩컴포넌트1" />
        <Chip label="#칩컴포넌트2" />
      </HashTagWrapper>
    </FarmInfoContainer>
  );
}

export default FarmIntroduce;
