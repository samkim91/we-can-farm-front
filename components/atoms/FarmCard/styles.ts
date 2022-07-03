import styled from "styled-components";
import { colors } from "styles/productStyles";

export const FarmCardContainer = styled.li`
  /* padding: 5px; */
  margin-bottom: 30px;
`;

export const FarmCardTitle = styled.h2`
  /* margin: 0; */
  margin: 5px 0;
  font-size: 16px;
`;

export const FarmCardContent = styled.h4`
  color: ${colors.GREY_MID};
  font-weight: 400;
  font-size: 13px;
  margin-top: 5px;
`;
