import React from "react";
import Image from "next/image";

import BaseLayout from "components/layout/BaseLayout";
import FarmIntroduce from "./FarmIntroduce";
import FarmOpeningHours from "./FarmOpeningHours";
import FarmUsePrice from "./FarmUsePrice";
import FarmRefundPolicy from "./FarmAmenities";
import FarmAmenities from "./FarmRefundPolicy";
import FarmLocation from "./FarmLocation";
import FarmOwnerInfo from "./FarmOwnerInfo";

import {
  CustomDivider,
  FarmDetailContainer,
  FarmImageWrapper,
  FarmInfoBasicInfoWrapper,
  IconTextWrapper,
} from "./styles";

function FarmDetail() {
  return (
    <>
      <BaseLayout>
        <FarmImageWrapper>
          <img
            // width={222}
            // height={200}
            src="/images/hepali.jpeg"
            // loading="eager"
            // priority={true}
            alt="farm_main_img"
            // quality={100}
          />
        </FarmImageWrapper>
        <FarmDetailContainer>
          <FarmInfoBasicInfoWrapper>
            <p className="farm-small-info">업종명・파주시</p>
            <h1>농장이름</h1>
            <IconTextWrapper>
              <img src="/icons/location.svg" />
              <p>제주특별자치도 서귀포시 서호동 1523-1</p>
            </IconTextWrapper>

            <IconTextWrapper>
              <img src="/icons/call.svg" />
              <p>010-2222-2222</p>
            </IconTextWrapper>

            <p className="farm-small-info">예약취소가능 여부</p>
            <CustomDivider />
          </FarmInfoBasicInfoWrapper>

          <FarmIntroduce />
          <CustomDivider />

          <FarmOpeningHours />
          <CustomDivider />

          <FarmUsePrice />
          <CustomDivider />

          <FarmRefundPolicy />
          <CustomDivider />

          <FarmAmenities />
          <CustomDivider />

          <FarmLocation />
          <CustomDivider />

          <FarmOwnerInfo />
        </FarmDetailContainer>
      </BaseLayout>
    </>
  );
}

export default FarmDetail;
