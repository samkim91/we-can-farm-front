import styled from "styled-components";
import { colors } from "styles/productStyles";

export const InputLabel = styled.label`
  position: absolute;
  top: -5px;
  left: 15px;
  color: ${colors.GREY_LIGHT};
  background-color: ${colors.WHITE};
  min-width: 22px;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
`;

export const ScrollDiv = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
  overflow-y: auto;
  width: 100%;
`;
export const SearchWrapper = styled.div`
  display: flex;
`;
export const InputContainer = styled.div`
  cursor: pointer;
  border: 1px solid ${colors.GREY_LIGHT};
  padding: 13px 20px;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  margin-right: 8px;

  & > input {
    text-overflow: ellipsis;
    width: 100%;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.24px;

    ::placeholder {
      color: ${colors.GRAY_3E};
      font-weight: 400;
    }
    :disabled {
      background-color: ${colors.WHITE};
    }
  }
`;

export const SearchButton = styled.button`
  background-color: ${colors.WHITE};
  border: 1px solid ${colors.MAIN_COLOR};
  color: ${colors.SECONDARY_COLOR};
  border-radius: 8px;
  font-size: 14px;
  width: 70px;
  min-width: 76px;
  box-sizing: border-box;
  font-weight: 700;
`;
