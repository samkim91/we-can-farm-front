import React from 'react';
import { ToggleWrapper, StyledToogle } from './styles';

interface ToogleProps {
  activeToggle: boolean;
  onClick: () => void;
}

function Toggle({ activeToggle, onClick }: ToogleProps) {
  return (
    <ToggleWrapper>
      <StyledToogle activeToggle={activeToggle} onClick={onClick} />
      {/* <StyledLabel htmlFor="toogle1">Checked?</StyledLabel> */}
    </ToggleWrapper>
  );
}

export default Toggle;
