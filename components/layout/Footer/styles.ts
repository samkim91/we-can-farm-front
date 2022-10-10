import styled from "styled-components";
import { colors } from "styles/productStyles";

export const FooterContainer = styled.section`
  background-color: ${colors.GRAY_E3};
  height: 300px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
`;

export const Email = styled.p`
  position: relative;
  font-size: 16px;
  font-weight: 500;
  color: ${colors.GRAY_56};
  line-height: 20px;
  letter-spacing: -0.5px;
`;

export const KakaoLink = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 100px;

  & > p {
    padding-right: 13px;
    margin-left: 8px;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    color: ${colors.GRAY_56};
  }
`;
