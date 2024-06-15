import React from 'react';
import { Button } from '../UI/Button';
import { ItemPropsType } from './types';

export const Item = (props: ItemPropsType): JSX.Element => {
  const {
    leftIcon,
    rightIcon,
    onLeftButtonClick,
    onRightButtonClick,
    children,
  } = props;

  return (
    <div className="item__container">
      <div className="item__body">{children}</div>
      <Button
        mix="item__left-button item__button"
        onClick={onLeftButtonClick}
      >
        {leftIcon}
      </Button>
      {!!rightIcon && (
        <Button
          mix="item__right-button item__button"
          onClick={onRightButtonClick}
        >
          {rightIcon}
        </Button>
      )}
    </div>
  );
};
