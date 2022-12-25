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
  onSavedThemeList: (themeList: ISelectedTheme[]) => void;
}

export interface ISelectedTheme {
  id: number;
  name: string;
}

function ThemeSeleceter({ themeList, onSavedThemeList }: ThemeSeleceterProps) {
  const [themeSelectList, setThemeSelectList] = useState<ISelectedTheme[]>([]);

  const handleOnChange = (
    checked: boolean,
    themeName: string,
    themeId: number
  ) => {
    if (checked) {
      setThemeSelectList([
        ...themeSelectList,
        { id: themeId, name: themeName },
      ]);
    } else if (!checked) {
      setThemeSelectList(themeSelectList.filter((el) => el.id !== themeId));
    }
  };

  return (
    <Container>
      <Dialog.Root>
        <HeaderWrapper>
          {/* <p>테마</p> */}
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
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={value.name}
                    value={value.name}
                    checked={
                      themeSelectList.some((value) => value.id - 1 === index)
                        ? true
                        : false
                    }
                    onChange={(e) => {
                      handleOnChange(
                        e.target.checked,
                        e.target.value,
                        value.id
                      );
                    }}
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
                <Button onClick={() => onSavedThemeList(themeSelectList)}>
                  저장하기
                </Button>
              </Dialog.Close>
            </DialogButtonWrapper>
          </DialogContents>
        </Dialog.Portal>
      </Dialog.Root>
    </Container>
  );
}

export default ThemeSeleceter;
