import React from 'react';
import styled from 'styled-components';
import { ICONS } from './constants';

export type IconPropsType = {
  type: keyof typeof ICONS;
  className?: string;
  size?: string;
  color?: string;
};

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Icon = (props: IconPropsType) => {
  const { type, className, size = '24', color = '#c49e6e' } = props;

  const IconComponent = ICONS[type];

  if (!IconComponent) {
    return null;
  }

  return (
    <IconContainer className={className}>
      <IconComponent
        className="icon"
        fill={color}
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
        x={0}
        y={0}
      />
    </IconContainer>
  );
};
