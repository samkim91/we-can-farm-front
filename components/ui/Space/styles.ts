import styled from "styled-components";

export const SpaceContainer = styled.div<{ height?: number; width?: number }>`
  height: ${(props) => (props.height ? props.height : 12)}px;
  width: ${(props) => (props.width ? props.width : 12)}px;
`;
