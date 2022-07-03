import React from "react";
import { ButtonContainer } from "./styles";

interface ButtonProps {
  children: React.ReactNode;
}

function Button({ children }: ButtonProps) {
  return (
    <ButtonContainer>
      <p>{children}</p>
    </ButtonContainer>
  );
}

export default Button;
