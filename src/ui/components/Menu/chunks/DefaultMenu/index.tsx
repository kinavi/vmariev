import React from 'react';
import { ContainerWrapper } from '../ContainerWrapper/inddex';
import { OptionList } from '../OptionList';
import { ContainerWrapperPropsType } from '../ContainerWrapper/types';
import { OptionListPropsType } from '../OptionList/types';

type DefaultMenuPropsType = Omit<ContainerWrapperPropsType, 'children'> &
  OptionListPropsType;

export const DefaultMenu = (props: DefaultMenuPropsType) => {
  const { onClose, options, ...wrapperProps } = props;
  return (
    <ContainerWrapper {...wrapperProps}>
      <OptionList onClose={onClose} options={options} />
    </ContainerWrapper>
  );
};
