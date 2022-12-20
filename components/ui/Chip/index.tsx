import React from "react";

import { ChipContainer } from "./styles";

interface ChipProps {
  label: string;
}

function Chip({ label }: ChipProps) {
  return (
    <ChipContainer>
      <p>{label}</p>
    </ChipContainer>
  );
}

export default Chip;
