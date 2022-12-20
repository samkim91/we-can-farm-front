import { addThemeAPI } from "api/theme";
import RegisterTheme from "components/admin/ThemeRegister";
import BaseLayout from "components/layout/BaseLayout";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";

function RegisterThemePage() {
  const { handleSubmit } = useForm();
  const methods = useForm();

  const onSubmitThemeRegister = (data: any) => {
    console.log("data", data);

    addThemeAPI(data);
    // alert(data);
  };

  return (
    <BaseLayout>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmitThemeRegister)}>
          <RegisterTheme />
        </Form>
      </FormProvider>
    </BaseLayout>
  );
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 20px 0;
`;
export default RegisterThemePage;
