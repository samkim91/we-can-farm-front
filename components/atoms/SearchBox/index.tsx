import React from "react";
import { SearchInput, SearchInputWrapper } from "./styles";
import { BsSearch } from "react-icons/bs";

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
  return (
    <SearchInputWrapper>
      <SearchInput type="text" placeholder="검색어를 입력해주세요." />
      <BsSearch size="20" />
    </SearchInputWrapper>
  );
}

export default SearchBox;
