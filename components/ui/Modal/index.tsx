import React from "react";
import { createPortal } from "react-dom";
import {
  ModalContainer,
  OverLay,
  ModalContents,
  ModalBody,
  ModalHeader,
} from "./styles";

interface Props {
  children: React.ReactNode | React.ReactElement;
  onCloseModal: () => void;
}

// NOTE: Portal 을 통한 모달생성
function ModalPortal({ children, onCloseModal }: Props) {
  const portalModalElement = document.getElementById("portal_modal");

  return (
    portalModalElement &&
    createPortal(
      <ModalContainer>
        <OverLay role="presentation" onClick={onCloseModal} />
        <ModalContents>
          {/*  NOTE: 임시 */}
          <ModalHeader>
            <p>주소검색</p>
            <button onClick={onCloseModal}>x</button>
          </ModalHeader>
          <ModalBody>{children}</ModalBody>
        </ModalContents>
      </ModalContainer>,
      portalModalElement
    )
  );

  // return null;
}

export default ModalPortal;
