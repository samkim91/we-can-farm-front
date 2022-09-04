import React from 'react';
import { CheckBoxButton, StyledCheckBox, CheckBoxWrapper } from './styles';

interface CheckBoxProps {
  onClickCheckBox: () => void;
  isChecked: boolean;
  checkBoxText?: string;
}

function CheckBox({ onClickCheckBox, isChecked, checkBoxText }: CheckBoxProps) {
  return (
    <CheckBoxWrapper onClick={onClickCheckBox}>
      <StyledCheckBox type="checkbox" checked={isChecked} onChange={() => null} value="" />
      <CheckBoxButton />
      <p>{checkBoxText}</p>
    </CheckBoxWrapper>
  );
}

export default CheckBox;
