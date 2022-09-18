import React from "react";

import { useRouter } from "next/router";
import FarmDetail from "components/FarmDetail";

function FarmDetailPage() {
  const router = useRouter();

  // TODO: 데이터 넘겨주기
  return <FarmDetail />;
}

export default FarmDetailPage;
