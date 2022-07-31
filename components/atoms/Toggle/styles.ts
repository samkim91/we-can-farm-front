import styled from "styled-components";
import { colors } from "styles/productStyles";

export const ToggleWrapper = styled.div``;

export const StyledToogle = styled.div<{ activeToggle: boolean }>`
  width: 3.3em;
  height: 1.6em;
  display: flex;
  cursor: pointer;
  align-items: center;
  position: relative;
  border-radius: 30px;
  background-color: ${(props) =>
    props.activeToggle === true ? colors.MAIN_COLOR : colors.GREY_LIGHT};
  transition: background-color 300ms linear;

  ::before {
    content: "";
    background-color: white;
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    margin: 0px 3px;
    padding-bottom: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transition: left 300ms ease-in-out;
    left: ${(props) => (props.activeToggle === true ? "1.8em" : "0")};
  }
`;
