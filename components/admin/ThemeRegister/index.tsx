import ImageUpload from "components/modules/ImageUpload";
import Button from "components/ui/Button";
import TextInput from "components/ui/TextInput";
import React from "react";
import { useFormContext } from "react-hook-form";
import styled from "styled-components";

const themeRegisterValue = {
  name: "name",
  code: "code",
  priority: "priority",
  isActive: "isActive",
  themeAttachmentFile: "themeAttachmentFile",
};

function RegisterTheme() {
  const { register } = useFormContext();

  return (
    <Wrapper>
      {/* <TextInput /> */}
      <input {...register("name")} />
      <input {...register("code")} />
      <input {...register("priority")} />
      <input {...register("isActive")} />
      <input {...register("themeAttachmentFile")} />
      <ImageUpload />
      <Button buttonType="submit">완료</Button>
    </Wrapper>
  );
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default RegisterTheme;
