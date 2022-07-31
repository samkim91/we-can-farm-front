import styled, { css } from "styled-components";
import { colors } from "styles/productStyles";

export const ButtonContainer = styled.button<{ isBackGround: boolean }>`
  cursor: pointer;
  border-radius: 5px;
  padding: 0px 26px;
  height: 36px;
  width: 100%;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;

  ${({ isBackGround }) =>
    isBackGround === true
      ? css`
          color: ${colors.WHITE};
          background: ${colors.MAIN_COLOR};
          opacity: 0.7;

          :hover {
            opacity: 1;
          }
        `
      : css`
          color: ${colors.GREY_THIN};
          border: 1px solid ${colors.GREY_THIN};
          background: ${colors.WHITE};

          :hover {
            color: ${colors.MAIN_COLOR};
            border: 1px solid ${colors.MAIN_COLOR};
          }
        `}
`;
