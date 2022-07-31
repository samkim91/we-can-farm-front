import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  isBackGround?: boolean;
  buttonType?: "submit" | "reset" | "button";
}

function Button({
  children,
  onClick,
  isBackGround = true,
  buttonType,
}: ButtonProps) {
  return (
    <ButtonContainer
      onClick={onClick}
      type={buttonType ? buttonType : "button"}
      isBackGround={isBackGround}
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
