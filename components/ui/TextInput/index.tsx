import React from "react";
import { Wrapper, Input, InputLabel } from "./styles";

interface TextInputProps {
  // onChange?: (value: any) => void;
  // value?: string;
  labelText: string;
  placeholder: string;
  maxLength?: number;
  registerHookForm?: any;
  type: string;
}

function TextInput({
  labelText,
  placeholder,
  maxLength,
  registerHookForm,
  type,
}: TextInputProps) {
  return (
    <Wrapper>
      <Input
        id={`${registerHookForm?.name}_input`}
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        autoComplete={type === "password" ? "current-password" : "on"} //NOTE: 자동완성 ->현재비밀번호 반영
        autocapitalize="off" // NOTE: 첫글자 대문자입력방지
        {...registerHookForm}
      />
      <InputLabel htmlFor={`${registerHookForm?.name}_input`}>
        {labelText}
      </InputLabel>
    </Wrapper>
  );
}

export default TextInput;
