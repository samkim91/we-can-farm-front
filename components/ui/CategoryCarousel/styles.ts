import styled from "styled-components";
import styles from "styles/productStyles";

export const Container = styled.div`
  margin-top: 32px;
`;
export const Title = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 15px;
  line-height: 24px;
  letter-spacing: -0.5px;
  padding: 0 10px;
`;

export const DotWrapper = styled.ul`
  bottom: -10px;
  /* NOTE: 점 하나 */
  & > li {
    margin: 0;
    width: 17px;
  }
`;

export const Wrapper = styled.div`
  max-width: ${styles.sizes.desktop}px;
  /* padding: 0 ${({ theme }) => theme.containerPadding}px; */
  margin: 0 auto;
  /* 
  ${({ theme }) =>
    theme.mediaQuery.desktop({
      paddingRight: "5px",
      paddingLeft: "5px",
    })} */
`;

export const Item = styled.div`
  text-align: center;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    svg path,
    svg rect,
    svg polygon,
    svg polyline,
    svg circle,
    svg line {
      stroke: ${styles.colors.MAIN_COLOR};
    }

    svg rect:last-of-type {
      stroke: none;
    }
    span {
      color: ${styles.colors.MAIN_COLOR};
    }
  }

  /* ${({ theme }) =>
    theme.mediaQuery.desktop({
      display: "inline-block",
    })} */
`;

export const ImageWrapper = styled.div<{ isSelected: boolean }>`
  border-radius: 50px;
  box-sizing: border-box;
  overflow: hidden;
  max-width: 66px;
  max-height: 66px;
  margin: 0 auto;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
  }

  ${({ isSelected }) =>
    isSelected
      ? `border:2px solid ${styles.colors.MAIN_COLOR}`
      : `border:2px solid ${styles.colors.GREY_MID}`}
`;

export const Text = styled.span<{ checked: boolean }>`
  color: ${({ checked }) =>
    checked ? styles.colors.MAIN_COLOR : styles.colors.GREY_MID};
  line-height: 18px;
  white-space: nowrap;
  font-size: 13px;
  font-weight: bold;
  height: 45px;
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;
