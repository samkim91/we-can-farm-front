import React, { useCallback, useState } from "react";

import TextInput from "components/ui/TextInput";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "components/ui/Button";
import Toggle from "components/ui/Toggle";
import CheckBox from "components/ui/CheckBox";
import BaseLayout from "components/layout/BaseLayout";
import Tabs from "components/ui/Tabs";
import RegisterTheme from "admin/RegisterTheme";
import RegisterFarm from "admin/RegisterFarm";

export interface ITabContent {
  id: number;
  title: string;
  component: JSX.Element;
}

const tabList: ITabContent[] = [
  { id: 0, title: "농장등록", component: <RegisterFarm /> },
  { id: 1, title: "테마등록", component: <RegisterTheme /> },
];

function AdminRegisterPage() {
  const { register, handleSubmit } = useForm();

  const [activeTab, setActiveTab] = useState(0);
  const [activeToggle, setActiveToggle] = useState(false);
  const [isCheckBoxClick, setIsCheckBoxClick] = useState(false);

  const onClickTab = useCallback(
    (event: React.MouseEvent<HTMLElement>, tavValue: ITabContent) => {
      event.preventDefault();
      const eventTarget = event.target as HTMLElement;

      if (eventTarget.innerText == tavValue.title) {
        setActiveTab(tavValue.id);
      }
    },
    []
  );

  const onClickToggle = () => {
    setActiveToggle((prev) => !prev);
  };
  return (
    <BaseLayout>
      <Tabs activeTab={activeTab} onClickTab={onClickTab} tabList={tabList} />

      <TextInput
        labelText="닉네임"
        placeholder="nickname"
        type="text"
        registerHookForm={register(`nickname`, { required: true })}
      />

      <CheckBox
        isChecked={isCheckBoxClick}
        onClickCheckBox={() => setIsCheckBoxClick((prev) => !prev)}
        checkBoxText="체크체크"
      />

      <Button> 버튼</Button>
      <Button isBackGround={false}> 버튼2</Button>
      <Toggle activeToggle={activeToggle} onClick={onClickToggle} />
    </BaseLayout>
  );
}

export default AdminRegisterPage;
