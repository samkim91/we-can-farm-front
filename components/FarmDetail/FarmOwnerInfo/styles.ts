import styled from "styled-components";
import { colors } from "styles/productStyles";

export const FarmerSnsWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 100%;
  max-width: 450px;
  margin-bottom: 15px;
`;

export const FarmerSns = styled.div`
  text-align: center;
  padding: 15px 30px;
  border-radius: 8px;
  border: 1px solid ${colors.GRAY_DB};

  & > img {
    width: 30px;
    height: 30px;
  }
  .sns-title {
    font-size: 14px;
    margin-top: 4px;
    white-space: pre;
  }
`;
