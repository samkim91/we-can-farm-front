import styled from "styled-components";
import { colors } from "styles/productStyles";

export const Title = styled.h1`
  font-size: 19px;
  margin-top: 30px;
  font-weight: 400;

  & > strong {
    color: ${colors.MAIN_COLOR};
  }
`;

export const FramListContainer = styled.div`
  margin: 40px 0;
  row-gap: 30px;
  column-gap: 20px;
  display: flex;
  flex-wrap: wrap;
`;
