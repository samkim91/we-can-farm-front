import React, { useState } from "react";

import TextInput from "components/ui/TextInput";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "components/ui/Button";
import Toggle from "components/ui/Toggle";
import CheckBox from "components/ui/CheckBox";
import BaseLayout from "components/layout/BaseLayout";

function RegisterfarmPage() {
  const { register, handleSubmit } = useForm();
  const [activeToggle, setActiveToggle] = useState(false);

  const [isCheckBoxClick, setIsCheckBoxClick] = useState(false);

  const onClickToggle = () => {
    setActiveToggle((prev) => !prev);
  };
  return (
    <BaseLayout>
      <TextInput
        labelText="닉네임"
        placeholder="nickname"
        type="text"
        registerHookForm={register(`nickname`, { required: true })}
      />

      <Button> 버튼</Button>
      <Button isBackGround={false}> 버튼2</Button>
      <Toggle activeToggle={activeToggle} onClick={onClickToggle} />

      <CheckBox
        isChecked={isCheckBoxClick}
        onClickCheckBox={() => setIsCheckBoxClick((prev) => !prev)}
        checkBoxText="체크체크"
      />
    </BaseLayout>
  );
}

export default RegisterfarmPage;
