import React from "react";
import Link from "next/link";

import LogoIcon from "public/icons/LogoIcon";
import KakaoIcon from "public/icons/KakaoIcon";

import { Email, FooterContainer, KakaoLink } from "./styles";

function Footer() {
  return (
    <FooterContainer>
      <Link href="/">
        <a>
          <LogoIcon width={68} height={18} />
        </a>
      </Link>

      <Email>이메일: weekanfarm@gmail.com</Email>

      <a
        href="http://pf.kakao.com/_lTxocb/chat"
        target="_blank"
        rel="noreferrer"
      >
        <KakaoLink>
          <KakaoIcon width={42} height={42} />
          <p>톡상담</p>
        </KakaoLink>
      </a>
    </FooterContainer>
  );
}

export default Footer;
