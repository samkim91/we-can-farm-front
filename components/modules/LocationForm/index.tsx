import { useState } from "react";
import DaumPostcode from "react-daum-postcode";

import Modal from "components/ui/Modal";
import Space from "components/ui/Space";
import { SearchButton, SearchWrapper } from "./styles";
import { Input } from "components/ui/TextInput/styles";

export interface locationDataType {
  area?: string;
  location?: string;
  address?: string;
}
interface LocationFormProps {
  location: string | undefined;
  onChangeLocation: (resultData: locationDataType) => void;
}

function LocationForm({ location, onChangeLocation }: LocationFormProps) {
  // const serviceArea = ['서울', '경기', '인천'];
  // const [locationAlert, setLocationAlert] = useState(false);
  // const [location, setLocation] = useState<locationDataType>({});
  // const [oldLocation, setOldLocation] = useState<locationDataType>({});

  const [isOpen, setIsOpen] = useState(false);

  const handleComplete = (resultData: locationDataType) => {
    onChangeLocation(resultData);
    setIsOpen(false);
  };

  return (
    <>
      <SearchWrapper onClick={() => setIsOpen(true)}>
        <Input value={location} placeholder="주소검색" type="text" />
        <Space />
        <SearchButton type="button" onClick={() => setIsOpen(true)}>
          주소검색
        </SearchButton>
      </SearchWrapper>

      {isOpen && (
        <Modal onCloseModal={() => setIsOpen(false)}>
          <DaumPostcode
            onComplete={handleComplete}
            style={{
              display: "block",
              padding: "7px",
              width: "500px",
            }}
          />
        </Modal>
      )}
    </>
  );
}

export default LocationForm;
