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

import { FarmDetailProps } from "./interface";

function FarmDetail({ farmData }: FarmDetailProps) {
  const {
    name,
    address,
    detailAddress,
    ownerNotes,
    email,
    mainPhone,
    refundPolicy,
    openingHours,
  } = farmData;

  return (
    <>
      <BaseLayout>
        <FarmImageWrapper>
          <Image
            layout="fill"
            src="/images/hepali.jpeg"
            loading="eager"
            priority={true}
            alt="farm-main-img"
            quality={100}
          />
        </FarmImageWrapper>

        <FarmDetailContainer>
          <FarmInfoBasicInfoWrapper>
            <p className="farm-small-info"></p>
            <h1>{name}</h1>
            <IconTextWrapper>
              <img src="/icons/location.svg" alt="location-icon" />
              <p>{address + " " + detailAddress}</p>
            </IconTextWrapper>

            <IconTextWrapper>
              <img src="/icons/call.svg" alt="call-icon" />
              <p>{mainPhone}</p>
            </IconTextWrapper>

            <p className="farm-small-info">예약취소가능 여부</p>
            <CustomDivider />
          </FarmInfoBasicInfoWrapper>

          <FarmIntroduce ownerNotes={ownerNotes} />
          <CustomDivider />

          <FarmOpeningHours />
          <CustomDivider />

          <FarmUsePrice />
          <CustomDivider />

          <FarmRefundPolicy refundPolicy={refundPolicy} />
          <CustomDivider />

          <FarmAmenities />
          <CustomDivider />

          <FarmLocation />
          <CustomDivider />

          <FarmOwnerInfo email={email} />
        </FarmDetailContainer>
      </BaseLayout>
    </>
  );
}

export default FarmDetail;
