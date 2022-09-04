import styled from "styled-components";
import Slider from "react-slick";

export const FarmList = styled.ul`
  padding: 0 22px 40px 22px;
  margin-top: 48px;
  /* margin: 25px 0; */
`;

export const StyledSlider = styled(Slider)`
  ul {
    box-sizing: border-box;
    li {
      display: flex;
      width: auto;
      vertical-align: center;
      align-items: center;
    }
  }
`;
