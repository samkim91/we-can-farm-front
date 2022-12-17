import ThemeSeleceter from "components/modules/ThemeSelecter";
import TextInput from "components/ui/TextInput";
import React from "react";
import { IFarm, ITheme } from "types/interface";

interface RegisterFarmProps {
  // farmList: IFarm[];
  themeList: ITheme[];
}

function RegisterFarm({ themeList }: RegisterFarmProps) {
  return (
    <div>
      <TextInput labelText="닉네임" placeholder="nickname" type="text" />
      <ThemeSeleceter themeList={themeList} />
    </div>
  );
}

export default RegisterFarm;
