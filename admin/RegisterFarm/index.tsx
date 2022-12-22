import ThemeSeleceter from "components/modules/ThemeSelecter";
import TextInput from "components/ui/TextInput";
import React, { useState } from "react";
import { IFarm, ITheme } from "types/interface";
import { useForm } from "react-hook-form";
import { Space, Wrapper } from "./styles";
import LocationForm, {
  locationDataType,
} from "components/modules/LocationForm";

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
};

function RegisterFarm({ themeList }: RegisterFarmProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [location, setLocation] = useState<string | undefined>("");

  console.log("location", location);

  const onChangeLocation = (resultData: locationDataType) => {
    setLocation(resultData.address);
  };

  const onSubmitRegisterFarm = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmitRegisterFarm}>
      {/* <input type="submit" /> */}

      <TextInput
        labelText="닉네임"
        placeholder="닉네임"
        type="text"
        register={{ ...register("name") }}
      />

      <Space />
      <Wrapper>
        <TextInput
          labelText="전화번호"
          placeholder="전화번호"
          type="tel"
          register={{ ...register("mainPhone") }}
        />
        <TextInput
          labelText="대체번호"
          placeholder="대체번호"
          type="tel"
          register={{ ...register("alternatePhone") }}
        />
      </Wrapper>
      <Space />

      <LocationForm location={location} onChangeLocation={onChangeLocation} />
      <Space />

      <TextInput
        labelText="세부주소"
        placeholder="세부주소"
        type="text"
        register={{ ...register("detailAddress") }}
      />

      {/* <ThemeSeleceter themeList={themeList} /> */}
    </form>
  );
}

export default RegisterFarm;
