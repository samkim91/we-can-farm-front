import React from "react";

import { FarmInfoContainer, FarmInfoTitleAndContent } from "../styles";
import { FarmerSns, FarmerSnsWrapper } from "./styles";

function FarmOwnerInfo() {
  return (
    <FarmInfoContainer>
      <h1>농장주 정보</h1>
      <FarmerSnsWrapper>
        <FarmerSns>
          {/* TODO: Icon 변경 */}
          <img
            // width={222}
            // height={200}
            src="/images/hepali.jpeg"
            // loading="eager"
            // priority={true}
            alt="farm_main_img"
            // quality={100}
          />
          <p className="sns-title">블로그</p>
        </FarmerSns>
        <FarmerSns>
          {/* TODO: Icon 변경 */}
          <img
            // width={222}
            // height={200}
            src="/images/hepali.jpeg"
            // loading="eager"
            // priority={true}
            alt="farm_main_img"
            // quality={100}
          />
          <p className="sns-title">SNS</p>
        </FarmerSns>
        <FarmerSns>
          {/* TODO: Icon 변경 */}
          <img
            // width={222}
            // height={200}
            src="/images/hepali.jpeg"
            // loading="eager"
            // priority={true}
            alt="farm_main_img"
            // quality={100}
          />
          <p className="sns-title">사이트</p>
        </FarmerSns>
      </FarmerSnsWrapper>

      <FarmInfoTitleAndContent>
        <dt className="title">이메일</dt>
        <dd className="contents"> lunch@naver.com</dd>
      </FarmInfoTitleAndContent>
    </FarmInfoContainer>
  );
}

export default FarmOwnerInfo;
