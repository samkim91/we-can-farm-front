import React from "react";

import Chip from "components/ui/Chip";

import { FarmInfoContainer } from "../styles";
import { HashTagWrapper } from "./styles";

import { FarmIntroduceProps } from "../interface";

function FarmIntroduce({ ownerNotes }: FarmIntroduceProps) {
  return (
    <FarmInfoContainer>
      <h1>농장 소개</h1>

      <p>{ownerNotes}</p>

      <HashTagWrapper>
        <Chip label="#칩컴포넌트0" />
        <Chip label="#칩컴포넌트1" />
        <Chip label="#칩컴포넌트2" />
      </HashTagWrapper>
    </FarmInfoContainer>
  );
}

export default FarmIntroduce;
