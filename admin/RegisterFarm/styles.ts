import styled from "styled-components";
import { colors } from "styles/productStyles";

export const RegisterFarmForm = styled.form`
  border: 2px solid ${colors.MAIN_COLOR};
  border-radius: 10px;
  padding: 24px 24px;
  margin-top: 24px;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;
`;

export const Space = styled.div`
  height: 20px;
`;

export const ChipWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 5px;
`;
