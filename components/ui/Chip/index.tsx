import React from "react";

import { ChipContainer } from "./styles";

interface ChipProps {
  label: string;
}

function Chip({ label }: ChipProps) {
  return <ChipContainer>{label}</ChipContainer>;
}

export default Chip;
