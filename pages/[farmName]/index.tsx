import React from "react";

import { useRouter } from "next/router";
import FarmDetail from "components/FarmDetail";

function FarmDetailPage() {
  const router = useRouter();

  return <FarmDetail />;
}

export default FarmDetailPage;
