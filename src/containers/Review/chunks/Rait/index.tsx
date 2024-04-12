import React from 'react';
import { RaitContainer } from './styled';
import { Icon } from '../../../../ui/components/Icon';

export const Rait = (props: { rait: number; maxRait: number }) => {
  const { rait, maxRait } = props;
  const stars = new Array(maxRait).fill(null);

  return (
    <RaitContainer>
      {stars.map((item, index) => {
        if (index < rait) {
          return <Icon type="activeStar" />;
        } else {
          return <Icon type="star" />;
        }
      })}
    </RaitContainer>
  );
};
