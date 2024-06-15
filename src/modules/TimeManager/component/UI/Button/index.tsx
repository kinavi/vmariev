import React, { useState, MouseEvent } from 'react';
import classnames from 'classnames';
import './index.sass';
import { ButtonPropsType } from './types';

export const Button = (props: ButtonPropsType): JSX.Element => {
  const { mix, onClick, children, isHidden, isDisable } = props;

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = (event: MouseEvent) => {
    event.preventDefault();
    setIsHover(true);
    event.stopPropagation();
  };

  const handleMouseLeave = (event: MouseEvent) => {
    event.preventDefault();
    setIsHover(false);
    event.stopPropagation();
  };

  const generateCls = classnames(
    'native-button',
    {
      'native-button_hover': !isDisable && isHover,
      'native-button_hidden': isHidden,
    },
    mix
  );

  return (
    <button
      type="submit"
      onClick={onClick}
      className={generateCls}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      disabled={isDisable}
    >
      {children}
    </button>
  );
};
