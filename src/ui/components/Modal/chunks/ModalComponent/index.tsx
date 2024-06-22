import React from 'react';
import { Container } from './styled';

type ModalPropsType = {
  className?: string;
  children: any;
};

export const ModalComponent = (props: ModalPropsType) => {
  const { children, className } = props;

  return <Container className={className}>{children}</Container>;
};
