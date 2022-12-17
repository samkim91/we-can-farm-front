import React from "react";
import { CheckBoxButton, StyledCheckBox, CheckBoxWrapper } from "./styles";

interface CheckBoxProps {
  onClickCheckBox: () => void;
  isChecked: boolean;
  checkBoxText?: string;
  onChange: () => void;
}

function CheckBox({
  onClickCheckBox,
  onChange,
  isChecked,
  checkBoxText,
}: CheckBoxProps) {
  return (
    <CheckBoxWrapper
    // onClick={onClickCheckBox}
    >
      <StyledCheckBox
        id={`custom-checkbox-${checkBoxText}`}
        type="checkbox"
        checked={isChecked}
        // onChange={() => null}
        value={checkBoxText}
        name={checkBoxText}
        onChange={onChange}
        // value=
      />
      <CheckBoxButton />
      <p>{checkBoxText}</p>
    </CheckBoxWrapper>
  );
}

export default CheckBox;
