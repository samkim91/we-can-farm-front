import styled, { css } from "styled-components";
import styles from "styles/productStyles";

export const TabContainer = styled.section`
  max-width: ${styles.sizes.desktop}px;
  margin: 0 auto;
  padding: 0 20px 10px 20px;
`;

export const TabWrapper = styled.span`
  display: flex;
`;

export const TabTitle = styled.h1<{ isActive: boolean }>`
  color: ${styles.colors.GREY_LIGHT};
  font-size: 15px;
  font-weight: 600;
  letter-spacing: -0.24px;
  line-height: 24px;
  //   transition: 0.4s ease;
  cursor: pointer;
  margin-right: 17px;

  ${({ isActive }) =>
    isActive === true &&
    css`
      padding-bottom: 12px;
      color: ${styles.colors.BLACK};
      border-bottom: 4px solid ${styles.colors.BLACK};
    `}
`;

export const TabContents = styled.div`
  padding-top: 20px;
`;
