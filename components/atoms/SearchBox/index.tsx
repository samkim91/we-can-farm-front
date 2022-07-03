import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

import Modal from "components/atoms/Modal";

import { SearchInput, SearchInputWrapper } from "./styles";

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
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  return (
    <>
      <SearchInputWrapper onClick={() => setIsSearchModalOpen(true)}>
        <SearchInput type="text" placeholder="검색어를 입력해주세요." />
        <BsSearch size="20" />
      </SearchInputWrapper>

      {isSearchModalOpen && (
        <Modal
          isOverLay={false}
          onCloseModal={() => setIsSearchModalOpen(false)}
        >
          검색모달
        </Modal>
      )}
    </>
  );
}

export default SearchBox;
