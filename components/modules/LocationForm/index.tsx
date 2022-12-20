import React, { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import DaumPostcode from "react-daum-postcode";

import Modal from "components/ui/Modal";

import styled from "styled-components";
import { colors } from "styles/productStyles";

interface locationDataType {
  area?: string;
  location?: string;
  address?: string;
}
interface LocationFormProps {
  data?: any;
  height?: string | number;
  currentQuestionNumber?: number;
}

function LocationForm({
  data,
  height,
  currentQuestionNumber,
}: LocationFormProps) {
  const router = useRouter();
  const isGroupBuying = router.pathname.includes("group-buying");

  // const serviceArea = ['서울', '경기', '인천'];
  // const [locationAlert, setLocationAlert] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState<locationDataType>({});
  const [oldLocation, setOldLocation] = useState<locationDataType>({});

  // const modalWidth = useMemo(
  //   () => (window.innerWidth > 500 ? `${500 - 40}px` : "calc(100%-40px)"),
  //   [window.innerWidth]
  // );

  const handleComplete = (resultData: any) => {
    setLocation({
      area: resultData.sido,
      location: resultData.sigungu,
      address: resultData.roadAddress
        ? resultData.roadAddress
        : resultData.autoRoadAddress,
    });
    setOldLocation({
      area: resultData.sido,
      location: resultData.sigungu,
      address: resultData.jibunAddress
        ? resultData.jibunAddress
        : resultData.autoJibunAddress,
    });
    setIsOpen(false);
  };

  return (
    <ScrollDiv height={Number(height)}>
      <SearchWrapper>
        <InputContainer onClick={() => setIsOpen(true)}>
          <input
            type="text"
            placeholder={"주소를 검색해주세요."}
            disabled
            value={location?.address || ""}
          />
        </InputContainer>
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
              width: "calc(100%-10)px",
            }}
          />
        </Modal>
      )}
    </ScrollDiv>
  );
}

export const InputLabel = styled.label`
  position: absolute;
  top: -5px;
  left: 15px;
  color: ${colors.GREY_LIGHT};
  background-color: ${colors.WHITE};
  min-width: 22px;
  text-align: center;
  font-size: 11px;
  font-weight: 500;
`;

const ScrollDiv = styled.div<{ height: number }>`
  height: ${({ height }) => height}px;
  overflow-y: auto;
  width: 100%;
`;
const SearchWrapper = styled.div`
  display: flex;
`;
const InputContainer = styled.div`
  cursor: pointer;
  border: 1px solid ${colors.GREY_LIGHT};
  padding: 13px 20px;
  height: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 8px;
  margin-right: 8px;

  & > input {
    text-overflow: ellipsis;
    width: 100%;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    letter-spacing: -0.24px;

    ::placeholder {
      color: ${colors.GRAY_3E};
      font-weight: 400;
    }
    :disabled {
      background-color: ${colors.WHITE};
    }
  }
`;

const SearchButton = styled.button`
  background-color: ${colors.WHITE};
  border: 1px solid ${colors.MAIN_COLOR};
  color: ${colors.SECONDARY_COLOR};
  border-radius: 8px;
  font-size: 14px;
  width: 70px;
  min-width: 76px;
  box-sizing: border-box;
  font-weight: 700;
`;

export default LocationForm;
