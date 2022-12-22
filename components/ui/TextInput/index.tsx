import { FormValues } from "admin/RegisterFarm";
import React, { HTMLInputTypeAttribute } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

import { Wrapper, Input, InputLabel } from "./styles";

interface TextInputProps {
  labelText: string;
  placeholder: string;
  maxLength?: number;
  type: HTMLInputTypeAttribute;
  register?: UseFormRegister<FieldValues> | any;
}

function TextInput({
  labelText,
  placeholder,
  maxLength,
  type,
  register,
}: TextInputProps) {
  return (
    <Wrapper>
      <Input
        type={type}
        placeholder={placeholder}
        maxLength={maxLength}
        {...register}
      />
      <InputLabel>{labelText}</InputLabel>
    </Wrapper>
  );
}

export default TextInput;
