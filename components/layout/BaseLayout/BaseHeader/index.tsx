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
import SearchBox from "components/ui/SearchBox";

interface BaseHeaderProps {}

function BaseHeader({}: BaseHeaderProps) {
  const router = useRouter();

  return (
    <>
      <BaseHeaderContainer>
        <NabBar>
          <Link href="/">
            {/* <a>위캔팜</a> */}
            <a>WeCanFarm</a>
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
