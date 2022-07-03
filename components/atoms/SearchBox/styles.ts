import styled from "styled-components";
import { colors } from "styles/productStyles";

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid ${colors.MAIN_COLOR};
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
