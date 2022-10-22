import styled from "styled-components";
import { colors, sizes } from "styles/productStyles";

export const CarouselContainer = styled.div`
  position: relative;
  width: 90%;
  margin-left: 5%;
  margin-top: 5%;
  border: 1px solid #eeeeee;
  border-radius: 5px;
  /* height: 400px; */
  height: 350px;
`;

export const CarouselWrapper = styled.div`
  position: absolute;
  width: calc(100% - 30px);
  /* width: 100%; */
  margin: 25px 15px;
  height: 350px;
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CarouselContents = styled.div`
  width: 100%;
  /* height: 350px; */
  display: inline-block;

  & > img {
    width: 100%;
    height: 350px;
  }

  & > p {
    z-index: 99;
  }
`;

export const CarouselLeftNavigator = styled.div`
  position: absolute;
  bottom: calc(200px - 16.5px);
  display: inline-block;
  left: 12px;
  cursor: pointer;
`;

export const CarouselRightNavigator = styled.div`
  position: absolute;
  bottom: calc(200px - 16.5px);
  display: inline-block;
  right: 12px;
  cursor: pointer;
`;

export const DotWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 30px;
  line-height: 30px;
  bottom: 0px;
  text-align: center;
`;

export const Dot = styled.div<{ isActive: boolean }>`
  display: inline-block;
  width: 12px;
  height: 12px;
  border-radius: 6px;
  margin: 0px 3px;
  background-color: ${({ isActive }) =>
    isActive ? colors.MAIN_COLOR : colors.GRAY_E3};
`;
