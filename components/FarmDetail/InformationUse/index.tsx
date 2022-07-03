import React from "react";
import MediaQuery from "utils/mediaQuery";
import {
  FarmInfoTabContents,
  FarmInfoTabTitle,
  FarmInfoTabWrapper,
  FarmInfoTabContainer,
} from "../styles";

const InformationUseData = [
  { title: "사이트", contents: "www.naver.com" },
  { title: "예약방법", contents: "www.naver.com" },
  { title: "운영시간", contents: "www.naver.com" },
  { title: "체험시간", contents: "www.naver.com" },
  { title: "가격", contents: "www.naver.com" },
  { title: "환불정책", contents: "www.naver.com" },
];

function InformationUse() {
  return (
    <FarmInfoTabContainer>
      {InformationUseData.map((value, index) => (
        <FarmInfoTabWrapper key={index}>
          <FarmInfoTabTitle>{value.title}</FarmInfoTabTitle>
          <FarmInfoTabContents>{value.contents}</FarmInfoTabContents>
        </FarmInfoTabWrapper>
      ))}
    </FarmInfoTabContainer>
  );
}

export default InformationUse;
