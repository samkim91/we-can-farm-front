import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import { colors } from "styles/productStyles";

export const Container = styled.div``;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & > button {
    width: 150px;
  }
`;

export const Overlay = styled(Dialog.Overlay)`
  width: 100%;
  height: 100%;
  background: ${colors.BLACK};
  opacity: 0.5;
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DialogContents = styled(Dialog.Content)`
  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 600px;
  max-height: 500px;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DialogDescription = styled(Dialog.Description)`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 300px;

  & > div {
    margin: 0 10px 12px 0;
  }
`;

export const DialogButtonWrapper = styled.div`
  display: flex;
  justify-content: end;

  & > button {
    width: 100px;
    white-space: pre;
  }
`;
