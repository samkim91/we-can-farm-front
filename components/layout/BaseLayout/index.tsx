import React from "react";
import productStyles from "styles/productStyles";
import MediaQuery from "utils/mediaQuery";

import BaseHeader from "./BaseHeader";
import { BaseLayoutContainer, BaseLayoutBody } from "./styles";

interface BaseLayoutProps {
  children: React.ReactNode;
}

function BaseLayout({ children }: BaseLayoutProps) {
  const { laptopTablet } = MediaQuery();
  // console.log("laptopTablet", laptopTablet);

  return (
    <BaseLayoutContainer>
      <BaseHeader />
      <BaseLayoutBody>{children}</BaseLayoutBody>
    </BaseLayoutContainer>
  );
}

export default BaseLayout;
