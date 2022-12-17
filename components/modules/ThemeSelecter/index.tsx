import * as Dialog from "@radix-ui/react-dialog";
import Button from "components/ui/Button";
import CheckBox from "components/ui/CheckBox";
import Chip from "components/ui/Chip";
import Modal from "components/ui/Modal";
import React, { useState } from "react";
import { ITheme } from "types/interface";
import {
  Container,
  DialogButtonWrapper,
  DialogContents,
  DialogDescription,
  HeaderWrapper,
  Overlay,
} from "./styles";

interface ThemeSeleceterProps {
  themeList: ITheme[];
}

function ThemeSeleceter({ themeList }: ThemeSeleceterProps) {
  const [themeSelectList, setThemeSelectList] = useState(
    new Array(themeList.length).fill(false)
  );
  const [isThemeAddModalOpen, setIsThemeAddModalOpen] = useState(false);
  const [isCheckBoxClick, setIsCheckBoxClick] = useState(false);

  const onClikcAddTheme = () => {
    setIsThemeAddModalOpen(true);
  };

  console.log("themeSelectList", themeList);

  const onClickCheckBox = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    value
  ) => {
    console.log(event.target.value);
    console.log(value.id);
    const updatedCheckedState = themeSelectList.map((item, index) =>
      index === value.id ? !item : item
    );
    // if (value.id === ev) setIsCheckBoxClick(true);
  };

  const handleOnChange = (position: number) => {
    const updatedCheckedState = themeSelectList.map((item, index) =>
      index === position ? !item : item
    );

    setThemeSelectList(updatedCheckedState);
  };

  return (
    <Container>
      <Dialog.Root>
        <HeaderWrapper>
          <p>테마</p>
          <Dialog.Trigger asChild>
            <Button>+ 테마추가</Button>
          </Dialog.Trigger>
        </HeaderWrapper>

        <Dialog.Portal>
          <Overlay />
          <DialogContents>
            <Dialog.Title>테마 추가</Dialog.Title>
            <DialogDescription>
              {themeList.map((value, index) => (
                <div key={index}>
                  {/* <CheckBox
                    onChange={() => handleOnChange(index)}
                    key={index}
                    isChecked={themeSelectList[index]}
                    // onClickCheckBox={() => handleOnChange(index)}
                    // onClickCheckBox={(event) => onClickCheckBox(event, value)}
                    // onClickCheckBox={() => handleOnChange(index)}
                    checkBoxText={value.name}
                  /> */}

                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={value.name}
                    value={value.name}
                    checked={themeSelectList[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>
                    {value.name}
                  </label>
                </div>
              ))}
            </DialogDescription>

            <DialogButtonWrapper>
              <Dialog.Close asChild>
                <button aria-label="Close">취소</button>
              </Dialog.Close>
              <Dialog.Close asChild>
                <Button>저장하기</Button>
              </Dialog.Close>
            </DialogButtonWrapper>
          </DialogContents>
        </Dialog.Portal>

        {themeList.map((value, index) => (
          <Chip key={index} label={value.name} />
        ))}
      </Dialog.Root>
    </Container>
  );
}

export default ThemeSeleceter;
