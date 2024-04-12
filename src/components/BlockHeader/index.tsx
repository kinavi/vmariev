import React from 'react';
import { BlockHeaderContainer } from './styled';

export const BlockHeader = (props: { title: string; children?: any }) => {
  return (
    <BlockHeaderContainer>
      <div className="header__title">{props.title}</div>
      {props.children}
    </BlockHeaderContainer>
  );
};
