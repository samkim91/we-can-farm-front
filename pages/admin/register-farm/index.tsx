import React, { useState } from "react";

import TextInput from "components/ui/TextInput";
import {
  useForm,
  SubmitHandler,
  useFormContext,
  FormProvider,
} from "react-hook-form";
import Button from "components/ui/Button";
import Toggle from "components/ui/Toggle";
import CheckBox from "components/ui/CheckBox";
import BaseLayout from "components/layout/BaseLayout";
import LocationForm from "components/modules/LocationForm";
import styled from "styled-components";
import Chip from "components/ui/Chip";
import FarmRegister from "components/admin/FarmRegister";

function RegisterfarmPage() {
  const { handleSubmit } = useForm();
  const methods = useForm();

  const [activeToggle, setActiveToggle] = useState(false);

  const onSubmitFarmRegister = (data: any) => {
    console.log("클릭!");
    console.log("data", data);
  };

  return (
    <BaseLayout>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmitFarmRegister)}>
          <FarmRegister />
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

export default RegisterfarmPage;
