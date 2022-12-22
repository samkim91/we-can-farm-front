import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { TextAreaContainer, TextArea, InputLabel } from "./styles";

interface TextInputProps {
  labelText: string;
  placeholder?: string;
  register?: UseFormRegister<FieldValues> | any;
}

function TextAreaInput({ labelText, placeholder, register }: TextInputProps) {
  return (
    <TextAreaContainer>
      <TextArea rows={5} placeholder={placeholder} {...register} />
      <InputLabel>{labelText}</InputLabel>
    </TextAreaContainer>
  );
}

export default TextAreaInput;
