import React from 'react';
import { ThemeableType } from '../../types';

export type ButtonPatternType = 'fill' | 'outline' | 'ghost' | 'none';
export type ButtonSizeType = 's' | 'm' | 'l' | 'xl' | 'none';
export type ButtonPropsType = {
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  pattern?: ButtonPatternType;
  className?: string;
  isDisable?: boolean;
  isFullWight?: boolean;
  isSuccess?: boolean;
  isLoading?: boolean;
  radius?: string;
  size?: ButtonSizeType;
  innerRef?: any;
  children: JSX.Element | number | string | JSX.Element[];
  type?: HTMLButtonElement['type'];
} & ThemeableType;
