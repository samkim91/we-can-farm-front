import { useMediaQuery } from "react-responsive";
import styles from "styles/productStyles";

const MediaQuery = () => {
  const isDesktop = useMediaQuery({
    query: `(max-width: ${styles.sizes.desktop}px)`,
  });
  // const isLaptop = useMediaQuery({
  //   query: `(max-width: ${styles.sizes.laptop}px)`,
  // });
  const laptopTablet = useMediaQuery({
    query: `(max-width: ${styles.sizes.laptopTablet}px)`,
  });
  const isTablet = useMediaQuery({
    query: `(max-width: ${styles.sizes.tablet}px)`,
  });
  const isTabletMobile = useMediaQuery({
    query: `(max-width: ${styles.sizes.tabletMobile}px)`,
  });
  const isMobileR = useMediaQuery({
    query: `(max-width: ${styles.sizes.mobileL}px)`,
  });
  const isMobileL = useMediaQuery({
    query: `(max-width: ${styles.sizes.mobileL}px)`,
  });
  const isMobileM = useMediaQuery({
    query: `(max-width: ${styles.sizes.mobileM}px)`,
  });
  const isMobileS = useMediaQuery({
    query: `(max-width: ${styles.sizes.mobileS}px)`,
  });
  const isMobileXS = useMediaQuery({
    query: `(max-width: ${styles.sizes.mobileXS}px)`,
  });

  return {
    isDesktop,
    // isLaptop,
    laptopTablet,
    isTablet,
    isTabletMobile,
    isMobileL,
    isMobileR,
    isMobileM,
    isMobileS,
    isMobileXS,
  };
};

export default MediaQuery;
