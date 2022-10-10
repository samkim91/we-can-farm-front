import React from "react";

import { FarmInfoContainer, FarmInfoTitleAndContent } from "../styles";

import { FarmRefundPolicyProps } from "../interface";

function FarmRefundPolicy({ refundPolicy }: FarmRefundPolicyProps) {
  return (
    <FarmInfoContainer>
      <h1>환불정책</h1>

      <FarmInfoTitleAndContent>
        {refundPolicy}
        {/* <dt className="title">일주일전</dt>
        <dd className="contents">50%</dd> */}
      </FarmInfoTitleAndContent>
    </FarmInfoContainer>
  );
}

export default FarmRefundPolicy;
