import React from 'react';
import { RaitContainer } from './styled';
import { Icon } from '../../../../ui/components/Icon';
import { guid } from '../../../../helpers/functions';

export const Rait = (props: { rait: number; maxRait: number }) => {
  const { rait, maxRait } = props;
  const stars = new Array(maxRait).fill(null);

  return (
    <RaitContainer>
      {stars.map((item, index) => {
        if (index < rait) {
          return (
            <Icon
              key={guid()}
              type="activeStar"
              size="14px"
            />
          );
        } else {
          return (
            <Icon
              key={guid()}
              type="star"
              size="14px"
            />
          );
        }
      })}
    </RaitContainer>
  );
};
