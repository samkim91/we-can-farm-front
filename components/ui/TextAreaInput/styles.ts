import styled from "styled-components";
import { colors } from "styles/productStyles";

export const TextAreaContainer = styled.div`
  position: relative;
`;

export const TextArea = styled.textarea`
  border-radius: 5px;
  color: ${colors.MAIN_COLOR};
  border: 1px solid ${colors.GREY_LIGHT};
  padding: 12px;
  min-width: 500px;
  font-size: 13px;

  resize: none;
  box-shadow: 0 0 0 1000px ${colors.WHITE} inset;

  ::placeholder {
    color: ${colors.GREY_LIGHT};
  }

  :focus {
    outline: ${colors.MAIN_COLOR};
    border-color: ${colors.MAIN_COLOR};
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
