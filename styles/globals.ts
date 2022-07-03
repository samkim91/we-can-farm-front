import styled, { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { colors } from "./productStyles";

export const Divider = styled.div`
  border-bottom: 1px solid ${colors.GREY_THIN};
  margin-bottom: 20px;
`;

const GlobalStyles = createGlobalStyle`
   /* NOTE: 웹브라우저마다 다르게보이는 css를 초기화 */
  ${normalize}
  * {
    box-sizing: border-box;
  }

  html {
    /* NOTE: 드래그 방지  */
    user-select: none;
    height: 100%;
    background-color: white;
    }
  body{
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  input, button {
    /* background-color: transparent; */
    /* border: none; */
    outline: none;
  }
  button {
   background-color: transparent; 
   border: none;
 }
  ol, ul,li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  p,h1,h2,h3,h4,h5{
    margin: 0;
  }
`;

export default GlobalStyles;
