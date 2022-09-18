import React from "react";

import { FarmInfoContainer, FarmInfoTitleAndContent } from "../styles";

function FarmUsePrice() {
  return (
    <FarmInfoContainer>
      <h1>이용가격</h1>

      <FarmInfoTitleAndContent>
        <dt className="title">아동딸기도둑</dt>
        <dd className="contents">15000원</dd>
      </FarmInfoTitleAndContent>
    </FarmInfoContainer>
  );
}

export default FarmUsePrice;
