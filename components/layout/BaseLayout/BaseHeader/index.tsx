import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import SearchBox from "components/ui/SearchBox";

import LogoIcon from "public/icons/LogoIcon";

import { BaseHeaderContainer, NabBar, Divider, Logo } from "./styles";

interface BaseHeaderProps {}

function BaseHeader({}: BaseHeaderProps) {
  return (
    <>
      <BaseHeaderContainer>
        <NabBar>
          <Link href="/">
            <Logo>
              <LogoIcon width={68} height={18} />
            </Logo>
          </Link>

          {/* <MenuWrapper>
            <Menu>메뉴 1</Menu>
            <Menu isActive={"/" === router.pathname ? true : false}>
              <Link href="/">
                <a>위캔팜</a>
              </Link>
            </Menu>
            <Menu>메뉴3</Menu>
          </MenuWrapper> */}
          <SearchBox />
        </NabBar>
      </BaseHeaderContainer>
      <Divider />
    </>
  );
}

export default BaseHeader;
