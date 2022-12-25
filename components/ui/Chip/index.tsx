import React from "react";

import { ChipContainer, ChipWrapper } from "./styles";

interface ChipProps {
  label: string;
}

function Chip({ label }: ChipProps) {
  return (
    <ChipContainer>
      <ChipWrapper>
        <p>{label}</p>
      </ChipWrapper>
    </ChipContainer>
  );
}

export default Chip;
