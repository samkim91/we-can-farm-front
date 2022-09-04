import styled from "styled-components";
import { colors, sizes } from "styles/productStyles";
import { MdCancel } from "react-icons/md";

export const SearchInputWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 2px solid ${colors.SECONDARY_COLOR};
  z-index: 99;
  border-radius: 5px;
  padding: 5px 10px;
  max-width: 210px;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.02em;
`;

export const SearchInputFullContainer = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${colors.GREY_LIGHT};
  z-index: 99;
  width: 100%;
  padding-bottom: 30px;
  margin-top: 20px;
`;

export const SearchInputFullWrapper = styled.div`
  position: relative;
  border: 1px solid none;
  width: 67%;
  max-width: ${sizes.desktop}px;
`;

export const SearchInputFull = styled.input`
  font-size: 17px;
  font-weight: bold;
  line-height: 20px;
  letter-spacing: 0.02em;
  padding-left: 20px;
  border: none;
  position: relative;
  width: 100%;

  ::placeholder {
    color: ${colors.GREY_LIGHT};
    font-size: 17px;
    font-weight: 500;
  }
`;

export const ClearSearchInputTextIcon = styled(MdCancel)`
  position: absolute;
  right: 10px;
  top: 1px;
`;
