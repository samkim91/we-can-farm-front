import React from "react";

import { NextPageContext } from "next";
import { useRouter } from "next/router";
import Image from "next/image";

import BaseLayout from "components/templates/BaseLayout";
import styled from "styled-components";
import { colors } from "styles/productStyles";
import Button from "components/atoms/Button";
import Tab from "components/atoms/Tab";

function FarmDetailPage() {
  const router = useRouter();

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
                src={`http://localhost:3000/images/hepali.jpeg`}
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

            {/* <FarmOwnerInfo>
            <Divider />
          </FarmOwnerInfo> */}
          </FarmInfoContentsWrapper>
        </FarmInfoContainer>
      </BaseLayout>
      <Divider />

      <Tab>
        <div title="이용안내">ssafasfsafasf</div>
        <div title="장소안내">두번임</div>
        <div title="이용후기">세번임</div>
      </Tab>
    </>
  );
}

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

export const Divider = styled.div`
  border-bottom: 1px solid ${colors.GREY_THIN};
  margin-bottom: 20px;
`;

export default FarmDetailPage;
