import React, { useState } from "react";

import TextInput from "components/ui/TextInput";
import { useForm, SubmitHandler, useFormContext } from "react-hook-form";
import Button from "components/ui/Button";
import Toggle from "components/ui/Toggle";
import CheckBox from "components/ui/CheckBox";
import BaseLayout from "components/layout/BaseLayout";
import LocationForm from "components/modules/LocationForm";
import styled from "styled-components";
import Chip from "components/ui/Chip";
import { SectionWrapper } from "./styles";

// NOTE:TODO: label ,placeholder text 까지 모두 관리할것
const farmRegisterValue = {
  farmName: "name",
  mainPhone: "mainPhone",
  detailAddress: "detailAddress",
  // 찾아오는길
  directinos: "directinos",
  email: "email",
  homePage: "homePage",
  sns: "sns",
};

const FarmRegister = () => {
  const { register } = useFormContext();

  const [isCheckBoxClick, setIsCheckBoxClick] = useState(false);

  return (
    <>
      <SectionWrapper>
        <TextInput
          labelText="농장이름"
          placeholder=""
          type="text"
          {...register(farmRegisterValue.farmName)}
          //   registerHookForm={register(farmRegisterValue.farmName, {
          //     required: true,
          //   })}
        />
        <CheckBox
          isChecked={isCheckBoxClick}
          onClickCheckBox={() => setIsCheckBoxClick((prev) => !prev)}
          checkBoxText="노출여부"
        />
      </SectionWrapper>
      <SectionWrapper>
        <TextInput
          labelText="전화번호"
          placeholder=""
          type="text"
          registerHookForm={register(farmRegisterValue.mainPhone, {
            required: true,
          })}
        />
        <TextInput
          labelText="대체번호"
          placeholder=""
          type="text"
          registerHookForm={register(farmRegisterValue.mainPhone, {
            required: true,
          })}
        />
      </SectionWrapper>
      <SectionWrapper>
        <LocationForm />
        <TextInput
          labelText="세부주소"
          placeholder=""
          type="text"
          registerHookForm={register(farmRegisterValue.detailAddress)}
        />
      </SectionWrapper>
      <TextInput
        labelText="찾아오시는 길"
        placeholder=""
        type="text"
        registerHookForm={register(farmRegisterValue.directinos)}
      />
      <SectionWrapper>
        <TextInput
          labelText="이메일"
          placeholder=""
          type="text"
          registerHookForm={register(farmRegisterValue.email)}
        />
        <TextInput
          labelText="홈페이지"
          placeholder=""
          type="text"
          registerHookForm={register(farmRegisterValue.homePage)}
        />
      </SectionWrapper>
      {/* NOTE: 현재 SNS가 고려가안되어있음 */}
      <SectionWrapper>
        <TextInput
          labelText="Sns"
          placeholder=""
          type="text"
          registerHookForm={register(farmRegisterValue.sns)}
        />
        <TextInput
          labelText="대체 Sns"
          placeholder=""
          type="text"
          registerHookForm={register(farmRegisterValue.sns)}
        />
      </SectionWrapper>
      {/*NOTE: 값 미설정 */}
      <TextInput
        labelText="농장소개"
        placeholder=""
        type="text"
        registerHookForm={register(farmRegisterValue.sns)}
      />
      {/*NOTE: 값 미설정 */}
      <TextInput
        labelText="편의시설"
        placeholder=""
        type="text"
        registerHookForm={register(farmRegisterValue.sns)}
      />
      {/*NOTE: 값 미설정 */}
      <TextInput
        labelText="환불정책"
        placeholder=""
        type="text"
        registerHookForm={register(farmRegisterValue.sns)}
      />
      <Button buttonType="submit">완료</Button>
      {/* <Button> 버튼</Button>
      <Button isBackGround={false}> 버튼2</Button>
      <Toggle activeToggle={activeToggle} onClick={onClickToggle} />

      <CheckBox
        isChecked={isCheckBoxClick}
        onClickCheckBox={() => setIsCheckBoxClick((prev) => !prev)}
        checkBoxText="체크체크"
      /> */}
    </>
  );
};

export default FarmRegister;
