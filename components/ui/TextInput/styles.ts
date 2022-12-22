import styled from "styled-components";
import { colors } from "styles/productStyles";

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Input = styled.input`
  border-radius: 5px;
  color: ${colors.MAIN_COLOR};
  border: 1px solid ${colors.GREY_LIGHT};
  height: 48px;
  padding: 12px;
  min-width: 280px;
  font-size: 13px;

  /* NOTE: 자동완성시 배경색이 변하는걸 방지  */
  -webkit-box-shadow: 0 0 0 1000px ${colors.WHITE} inset;
  box-shadow: 0 0 0 1000px ${colors.WHITE} inset;

  ::placeholder {
    color: ${colors.GREY_LIGHT};
  }

  :focus {
    border: 1px solid ${colors.MAIN_COLOR};
    background-color: ${colors.WHITE};

    + label {
      color: ${colors.MAIN_COLOR};
    }
  }
`;

export const InputLabel = styled.label`
  position: absolute;
  top: -5px;
  left: 15px;
  color: ${colors.GREY_LIGHT};
  background-color: ${colors.WHITE};
  min-width: 22px;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
`;
