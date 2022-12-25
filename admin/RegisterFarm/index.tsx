import { useState } from "react";
import { useForm } from "react-hook-form";

import TextInput from "components/ui/TextInput";
import TextArea from "components/ui/TextAreaInput";
import TextAreaInput from "components/ui/TextAreaInput";
import Chip from "components/ui/Chip";

import { IFarm, ITheme } from "types/interface";

import ThemeSeleceter, {
  ISelectedTheme,
} from "components/modules/ThemeSelecter";

import LocationForm, {
  locationDataType,
} from "components/modules/LocationForm";

import { ChipWrapper, Space, Wrapper } from "./styles";

interface RegisterFarmProps {
  // farmList: IFarm[];
  themeList: ITheme[];
}
export type FormValues = {
  name: string;
  mainPhone: number;
  alternatePhone: number;
  address: string;
  detailAddress: string;

  directions: string;
};

function RegisterFarm({ themeList }: RegisterFarmProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [location, setLocation] = useState<string | undefined>("");
  const [selectedThemeList, setSelectedThemeList] = useState<ISelectedTheme[]>(
    []
  );

  const onChangeLocation = (resultData: locationDataType) => {
    setLocation(resultData.address);
  };

  const onSavedThemeList = (themeList: ISelectedTheme[]) => {
    setSelectedThemeList(themeList);
  };

  const onSubmitRegisterFarm = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmitRegisterFarm}>
      <input type="submit" />
      <TextInput
        labelText="농장이름"
        type="text"
        register={{ ...register("name") }}
      />
      <Space />
      <Wrapper>
        <TextInput
          labelText="전화번호"
          type="tel"
          register={{ ...register("mainPhone") }}
        />
        <TextInput
          labelText="대체번호"
          type="tel"
          register={{ ...register("alternatePhone") }}
        />
      </Wrapper>
      <Space />
      <LocationForm location={location} onChangeLocation={onChangeLocation} />

      <Space />
      <TextInput
        labelText="세부주소"
        type="text"
        register={{ ...register("detailAddress") }}
      />
      <Space />

      <TextAreaInput
        labelText="찾아오는길"
        register={{ ...register("directions") }}
      />

      <ThemeSeleceter
        themeList={themeList}
        onSavedThemeList={onSavedThemeList}
      />

      <ChipWrapper>
        {selectedThemeList?.map((value) => (
          <Chip key={value.id} label={value.name} />
        ))}
      </ChipWrapper>
    </form>
  );
}

export default RegisterFarm;
