import React, { useContext } from 'react';
import { IContentProperties } from '../../types';
import { RadioIconContainer } from './styled';
import { ThemeContext } from '../../../../context/ThemeContext';

export const RadioBlockItem = (
  props: IContentProperties & { onClick: () => void }
) => {
  const {
    isFocus = false,
    isChecked = false,
    isDisable = false,
    Content,
    onClick,
  } = props;

  const theme = useContext(ThemeContext);

  return (
    <RadioIconContainer
      isChecked={isChecked}
      isFocus={isFocus}
      isDisable={isDisable}
      onClick={onClick}
      theme={theme || {}}
    >
      {Content}
    </RadioIconContainer>
  );
};
