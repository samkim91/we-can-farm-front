import styled from "styled-components";
import { Divider } from "styles/globals";

export const FarmDetailPageContainer = styled.div``;

export const FarmInfoContainer = styled.div`
  margin-top: 30px;
  padding: 0 50px;
`;

export const FarmInfoTitle = styled.h1`
  text-align: center;
`;
export const FarmInfoContentsWrapper = styled.div`
  display: flex;
  margin-top: 50px;
`;
export const ImageWrapper = styled.div`
  align-items: center;
  display: flex;
`;

export const MainInfo = styled.div`
  margin-left: 80px;

  & > button {
    margin-top: 5px;
  }
`;

export const FarmInfoContents = styled.div`
  margin-bottom: 15px;

  .title {
    font-size: 13px;
    font-weight: 400;
    margin-bottom: 5px;
  }
  .content {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const FarmOwnerInfo = styled.dl`
  display: flex;
  margin: 0px 0 8px 0px;

  .title {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    width: 52px;
  }
  .content {
    font-size: 14px;
    font-weight: 400;
  }
`;

export const CustomDivider = styled(Divider)`
  margin: 25px 0 30px 0;
`;

/* NOTE:하단정보탭 관련 스타일 */
export const FarmInfoTabContainer = styled.section`
  min-height: 500px;
`;

export const FarmInfoTabWrapper = styled.dl`
  display: flex;
  align-items: center;
  margin-bottom: 35px;
`;

export const FarmInfoTabTitle = styled.dt`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 8px;
  width: 100px;
`;

export const FarmInfoTabContents = styled.dd`
  font-size: 18px;
  font-weight: 400;
  margin: 0px 0 10px 50px;
`;
