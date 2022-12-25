import styled from "styled-components";
import { colors } from "styles/productStyles";

export const ChipContainer = styled.div`
  display: flex;
`;

export const ChipWrapper = styled.div`
  border-radius: 6px;
  padding: 6px 8px;
  background-color: ${colors.GRAY_F5};
  color: ${colors.GRAY_4D};
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  padding: 10px 16px;
  border-radius: 30px;

  & > p {
    font-size: 11px;
    line-height: 15px;
    letter-spacing: 0.06px;
  }
`;
