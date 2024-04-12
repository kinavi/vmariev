import { DotProps } from 'react-multi-carousel';
import { CustomDotContainer } from './styled';
import React from 'react';
import classNames from 'classnames';

export const CustomDot = ({ onClick, ...rest }: DotProps) => {
  const { active } = rest;
  if (!onClick) {
    return null;
  }
  return (
    <CustomDotContainer onClick={() => onClick()}>
      <div
        className={classNames('custom-dot__dot', {
          'custom-dot__dot_active': active,
        })}
      />
    </CustomDotContainer>
  );
};
