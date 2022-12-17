import styled from "styled-components";
import { colors } from "styles/productStyles";

export const CheckBoxWrapper = styled.div`
  display: flex;
  cursor: pointer;

  & > p {
    color: ${colors.BLACK};
    margin: 0 0 0 6px;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.23px;
  }
`;

export const CheckBoxButton = styled.div`
  z-index: 1;
  display: inline-block;
  width: 16px;
  height: 16px;
  box-sizing: border-box;
  border: 1px solid ${colors.MAIN_COLOR};
  border-radius: 4px;
  transition: all 0.3s;
`;

export const StyledCheckBox = styled.input`
  display: none;

  &:checked ~ ${CheckBoxButton} {
    background: url("/svgs/checkbox.svg") no-repeat;
    background-position: center;
    border: none;
  }
`;
