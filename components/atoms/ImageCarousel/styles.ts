import styled from "styled-components";
import { colors } from "styles/productStyles";

export const SlideContainer = styled.div`
  background-color: #faf4f2;
  position: relative;
  border-radius: 10px;
  text-align: center;
  margin-top: 50px;
`;

export const SlideActive = styled.li<{ active: string }>`
  display: ${({ active }) => (active === "active" ? "inline-block" : "none")};
`;

export const SlideInfo = styled.div`
  display: flex;
  width: 700px;

  & > img {
    flex: 0 0 40%;
    object-fit: fill;
    height: 320px;
    padding: 10px;
    width: 300px;
    margin-top: 10px;
    margin-left: 20px;
    border-radius: 5px;
  }
`;

export const SlideTextWrapper = styled.div`
  flex: 0 0 60%;
  text-align: left;
  padding: 0 50px;
  margin-top: 50px;
  color: ${colors.GREY_MID};

  & > h2 {
    font-weight: bold;
  }
`;

export const LeftArrows = styled.span`
  cursor: pointer;
  position: absolute;
  top: 65%;
  margin: auto;
  width: 35px;
  height: 35px;
  font-size: 30px;
  color: #fba896;
  opacity: 0.5;
  z-index: 55;

  &:hover {
    border-radius: 50%;
    color: orangered;
    transition: all 0.3s ease-in;
  }
`;

export const RightArrows = styled.span`
  cursor: pointer;
  position: absolute;
  top: 65%;
  margin: auto;
  width: 35px;
  height: 35px;
  font-size: 30px;
  color: #fba896;
  opacity: 0.5;
  z-index: 10;
  margin-left: 50px;

  &:hover {
    border-radius: 50%;
    color: orangered;
    transition: all 0.3s ease-in;
  }
`;

export const ArrowWarpper = styled.div``;

export const NumberWrapper = styled.div`
  position: absolute;
  top: 66.5%;
  right: 33%;
  padding: 3px 8px;
  font-size: 13px;
  font-weight: 400;
  background-color: #ff9e7d;
  border-radius: 30px;
  color: ${colors.WHITE};
`;
