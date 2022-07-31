import React from "react";
import Image from "next/image";

import Button from "components/atoms/Button";
import Tab from "components/atoms/Tab";
import BaseLayout from "components/templates/BaseLayout";
import InformationUse from "./InformationUse";

import { Divider } from "styles/globals";
import {
  CustomDivider,
  FarmInfoContainer,
  FarmInfoContents,
  FarmInfoContentsWrapper,
  FarmInfoTitle,
  FarmOwnerInfo,
  ImageWrapper,
  MainInfo,
} from "./styles";
import InformationLocation from "./InformationLocation";
import Reviews from "./Reviews";

function FarmDetail() {
  return (
    <>
      <BaseLayout>
        <FarmInfoContainer>
          <FarmInfoTitle>농장 제목</FarmInfoTitle>

          <FarmInfoContentsWrapper>
            <ImageWrapper>
              <Image
                width={500}
                height={400}
                src="/images/hepali.jpeg"
                loading="eager"
                priority={true}
                alt="farm_main_img"
                quality={100}
              />
            </ImageWrapper>

            <MainInfo>
              <FarmInfoContents>
                <h4 className="title">농장 업종</h4>
                <h3 className="content">수박 . 체리 . 고구마</h3>
              </FarmInfoContents>

              <FarmInfoContents>
                <h4 className="title">지역</h4>
                <h3 className="content">양평동 연어덮밥</h3>
              </FarmInfoContents>

              <FarmInfoContents>
                <h4 className="title">농장소개</h4>
                <h3 className="content">
                  아주 야무지고 맛있고 좋아요 친절친절
                </h3>
              </FarmInfoContents>

              <FarmInfoContents>
                <h4 className="title">가격</h4>
                <h3 className="content">55000원</h3>
              </FarmInfoContents>

              <FarmInfoContents>
                <h4 className="title">운영시간</h4>
                <h3 className="content">12:00 - 6:00</h3>
              </FarmInfoContents>
              <Divider />

              <FarmOwnerInfo>
                <dt className="title">농장주</dt>
                <dd className="content">응애맨</dd>
              </FarmOwnerInfo>
              <FarmOwnerInfo>
                <dt className="title">연락처</dt>
                <dd className="content">010-2222-2222</dd>
              </FarmOwnerInfo>
              <FarmOwnerInfo>
                <dt className="title">농장소개</dt>
                <dd className="content">
                  아주 야무지고 맛있고 좋아요 친절친절
                </dd>
              </FarmOwnerInfo>

              <Button>농장 예약하기</Button>
            </MainInfo>
          </FarmInfoContentsWrapper>
        </FarmInfoContainer>
      </BaseLayout>

      <CustomDivider />

      <Tab>
        <div title="이용안내">
          <InformationUse />
        </div>
        <div title="장소안내">
          <InformationLocation />
        </div>
        <div title="이용후기">
          <Reviews />
        </div>
      </Tab>
    </>
  );
}

export default FarmDetail;
