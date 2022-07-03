import styled from "styled-components";
import styles from "styles/productStyles";

export const BaseLayoutContainer = styled.article``;

// <{ width: number }>
export const BaseLayoutBody = styled.div`
  margin: 0 auto;
  max-width: ${styles.sizes.desktop}px;
  padding: 0 20px;
`;
