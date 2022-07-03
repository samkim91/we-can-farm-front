import styled from "styled-components";
import { colors } from "styles/productStyles";

export const ButtonContainer = styled.button`
  background-color: ${colors.MAIN_COLOR};
  color: ${colors.WHITE};
  padding: 15px 25px;
  border-radius: 5px;
  width: 100%;
  cursor: pointer;

  & > p {
    font-size: 15px;
    font-weight: 500;

    :hover {
      font-weight: 700;
    }
  }
`;
