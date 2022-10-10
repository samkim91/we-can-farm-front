import React from "react";
import productStyles from "styles/productStyles";
import MediaQuery from "utils/mediaQuery";
import Footer from "../Footer";

import BaseHeader from "./BaseHeader";
import { BaseLayoutContainer, BaseLayoutBody } from "./styles";

interface BaseLayoutProps {
  children: React.ReactNode;
}

function BaseLayout({ children }: BaseLayoutProps) {
  const { laptopTablet } = MediaQuery();

  return (
    <BaseLayoutContainer>
      <BaseHeader />
      <BaseLayoutBody>{children}</BaseLayoutBody>
      <Footer />
    </BaseLayoutContainer>
  );
}

export default BaseLayout;
