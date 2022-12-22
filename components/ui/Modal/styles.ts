import styled from "styled-components";
import { colors } from "styles/productStyles";

export const OverLay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${colors.BLACK};
  opacity: 0.5;
`;

export const ModalContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
`;

export const ModalContents = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 10;
  width: 100%;
  min-height: 500px;
  max-width: 500px;
  background: ${colors.WHITE};
  box-shadow: 0px 0px 5px rgba(128, 128, 128, 0.5);
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 15px 15px;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 35px 25px 35px;
`;
