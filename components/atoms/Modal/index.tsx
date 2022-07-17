import React from "react";
import { createPortal } from "react-dom";
import {
  ModalContainer,
  OverLay,
  ModalContents,
  ModalBody,
  ModalHeader,
} from "./styles";

interface ModalProps {
  children: React.ReactNode | React.ReactElement;
  onCloseModal: () => void;
  isOverLay?: boolean;
}

function Modal({ children, onCloseModal, isOverLay = true }: ModalProps) {
  const portalModalElement = document.getElementById("portal_modal");

  return (
    portalModalElement &&
    createPortal(
      <ModalContainer>
        {isOverLay && <OverLay role="presentation" onClick={onCloseModal} />}

        <ModalContents>
          {/* <ModalHeader>
            <p>SPECNOTE</p>
          </ModalHeader> */}
          {/* <button onClick={onCloseModal}>x</button> */}
          {children}
          {/* <ModalBody>{children}</ModalBody> */}
        </ModalContents>
      </ModalContainer>,
      portalModalElement
    )
  );
}

export default Modal;
