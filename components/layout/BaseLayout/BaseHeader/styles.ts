import styled from "styled-components";
import styles from "styles/productStyles";

export const BaseHeaderContainer = styled.article`
  padding: 0 20px 12px 20px;
  margin: 0 auto;
  max-width: ${styles.sizes.desktop}px;

  & > div {
    margin-left: auto;
  }
`;

export const Divider = styled.div`
  border-bottom: 1px solid ${styles.colors.GREY_LIGHT};
  box-shadow: 0px 2px 4px rgba(92, 33, 7, 0.5);
`;

export const NabBar = styled.nav`
  padding: 20px 0 15px 0;
  margin: 0 auto;
  max-width: ${styles.sizes.desktop}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  color: ${styles.colors.MAIN_COLOR};
  font-weight: bold;
  font-size: 23px;
`;

export const MenuWrapper = styled.ul`
  display: flex;
`;

export const Menu = styled.li<{ isActive?: boolean }>`
  cursor: pointer;
  padding: 10px 20px;
  font-weight: 700;
  font-size: 14px;
  color: ${({ isActive }) =>
    isActive ? styles.colors.MAIN_COLOR : styles.colors.GREY_LIGHT};
`;
