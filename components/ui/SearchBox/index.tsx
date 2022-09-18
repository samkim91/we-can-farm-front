import React, { ChangeEvent, useCallback, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

import Modal from "components/ui/Modal";

import {
  ClearSearchInputTextIcon,
  SearchInput,
  SearchInputFull,
  SearchInputFullContainer,
  SearchInputFullWrapper,
  SearchInputWrapper,
} from "./styles";

interface SearchBoxProps {
  onKeyDown: (e: KeyboardEvent) => void;
  onClick: (string: string) => void;
  onBlur?: (e: KeyboardEvent) => void;
  showAutoCompleteModal: boolean;
  isActive?: boolean;
  searchWord?: string;
  onChangeInput?: (value: string) => void;
}

function SearchBox() {
  const [searchText, setSearchText] = useState("");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const onChangeSearchText = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    },
    [searchText]
  );

  const onClickResetText = useCallback(() => {
    setSearchText("");
  }, [searchText]);

  return (
    <>
      {/* <SearchInputWrapper onClick={() => setIsSearchModalOpen(true)}> */}
      {/* <SearchInput type="text" placeholder="검색어를 입력해주세요." /> */}
      {/* </SearchInputWrapper> */}
      <BsSearch size="20" onClick={() => setIsSearchModalOpen(true)} />

      {isSearchModalOpen && (
        <Modal
          isOverLay={false}
          onCloseModal={() => setIsSearchModalOpen(false)}
        >
          <SearchInputFullContainer>
            <BsSearch size="20" />
            <SearchInputFullWrapper>
              <SearchInputFull
                type="text"
                placeholder="검색어를 입력해주세요."
                value={searchText}
                onChange={onChangeSearchText}
              />
              <ClearSearchInputTextIcon size="19" onClick={onClickResetText} />
            </SearchInputFullWrapper>
            <IoMdClose size="28" onClick={() => setIsSearchModalOpen(false)} />
          </SearchInputFullContainer>
        </Modal>
      )}
    </>
  );
}

export default SearchBox;
