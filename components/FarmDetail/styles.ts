import styled from "styled-components";
import { Divider } from "styles/globals";
import { colors } from "styles/productStyles";

export const FarmDetailContainer = styled.div`
  padding: 16px 23px 100px 23px;
`;

export const FarmImageWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
  border: 1px solid ${colors.GREY_LIGHT};

  & > img {
    width: 90%;
    height: 300px;
  }
`;

export const FarmInfoBasicInfoWrapper = styled.section`
  .farm-small-info {
    color: ${colors.GRAY_96};
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 6px;
  }

  & > h1 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 7px;
  }
`;

export const IconTextWrapper = styled.div`
  display: flex;
  margin-bottom: 10px;

  & > p {
    font-size: 14px;
    color: ${colors.GRAY_56};
  }
`;

export const FarmInfoContainer = styled.section`
  & > h1 {
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    margin-bottom: 13px;
  }

  & > p {
    font-size: 14px;
    font-weight: 400;
    line-height: 23px;
    color: ${colors.GRAY_3E};
  }
`;

export const MainInfo = styled.div`
  margin-left: 80px;

  & > button {
    margin-top: 5px;
  }
`;

export const FarmInfoTitleAndContent = styled.dl`
  display: flex;
  margin: 0px 0 8px 0px;
  font-size: 14px;

  .title {
    font-weight: 400;
    margin-bottom: 8px;
  }
  .contents {
    font-weight: 500;
    color: ${colors.GRAY_4D};
  }
`;

export const CustomDivider = styled(Divider)`
  margin: 25px 0 30px 0;
`;

/* NOTE:하단정보탭 관련 스타일 */
export const FarmInfoTabContainer = styled.section`
  min-height: 500px;
`;
