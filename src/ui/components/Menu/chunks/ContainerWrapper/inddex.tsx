import React from 'react';
import { MenuContainer } from '../../styled';
import { ContainerWrapperPropsType } from './types';

export const ContainerWrapper = (props: ContainerWrapperPropsType) => {
  const { children, direction = 'left', minWidth, className } = props;
  return (
    <MenuContainer
      direction={direction}
      minWidth={minWidth}
      className={className}
    >
      {children}
    </MenuContainer>
  );
};
