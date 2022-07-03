import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  BaseHeaderContainer,
  NabBar,
  MenuWrapper,
  Menu,
  Divider,
} from "./styles";
import SearchBox from "components/atoms/SearchBox";

interface BaseHeaderProps {}

function BaseHeader({}: BaseHeaderProps) {
  const router = useRouter();

  return (
    <>
      <BaseHeaderContainer>
        <NabBar>
          <Link href="/">
            <a>로고로고</a>
          </Link>

          <MenuWrapper>
            <Menu>메뉴 1</Menu>
            <Menu isActive={"/" === router.pathname ? true : false}>
              <Link href="/">
                <a>위캔팜</a>
              </Link>
            </Menu>
            <Menu>메뉴3</Menu>
          </MenuWrapper>
        </NabBar>
        <SearchBox />
      </BaseHeaderContainer>
      <Divider />
    </>
  );
}

export default BaseHeader;
