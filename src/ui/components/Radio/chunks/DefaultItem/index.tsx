import React, { useContext } from 'react';
import { IContentProperties } from '../../types';
import { DefaultItemContainer } from './styled';
import { ThemeContext } from '../../../../context/ThemeContext';
import { DefaultItemPropsType } from './types';

export const DefaultItem = (props: DefaultItemPropsType) => {
  const {
    isFocus = false,
    isChecked = false,
    isDisable = false,
    Content,
    onClick,
  } = props;

  const theme = useContext(ThemeContext);

  return (
    <DefaultItemContainer
      isChecked={isChecked}
      isFocus={isFocus}
      isDisable={isDisable}
      onClick={onClick}
      theme={theme || { }}
    >
      <div className="default-item__indicator" />
      <div>{Content}</div>
    </DefaultItemContainer>
  );
};
