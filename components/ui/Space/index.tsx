import React from "react";
import { SpaceContainer } from "./styles";

interface SpaceProps {
  height?: number;
  width?: number;
}

function Space({ height, width }: SpaceProps) {
  return <SpaceContainer height={height} width={width} />;
}

export default Space;
