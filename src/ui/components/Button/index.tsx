import React, { useContext } from 'react';
import classnames from 'classnames';

import { ButtonPropsType } from './types';
import { ButtonStyled } from './style';
import { ThemeContext } from '../../context/ThemeContext';
import { DEFAULT_BUTTON } from './constants';
import { Icon } from '../Icon';

export const Button = (props: ButtonPropsType) => {
  const {
    children,
    innerRef,
    onClick = () => {},
    isSuccess = false,
    isLoading = false,
    isDisable = false,
    isFullWight = false,
    className,
    size = 'none',
    type,
    pattern = 'none',
    color = 'primary',
  } = props;

  const theme = useContext(ThemeContext);

  const mix = classnames(className, `button_size-${size}`, {
    button_disable: isDisable,
    button_loading: isLoading,
    button_success: isSuccess,
    'button_is-full-wight': isFullWight,
  });
  console.log('theme', theme);
  const renderContent = () => {
    if (isLoading) {
      return (
        <Icon
          className="button__icon_loading"
          type="loader"
          size="20"
        />
      );
    }
    if (isSuccess) {
      return (
        <Icon
          className="button__icon_success"
          type="check"
          size="20"
        />
      );
    }
    return children;
  };

  return (
    <ButtonStyled
      type={type as any}
      ref={innerRef}
      className={mix}
      onClick={onClick}
      disabled={isLoading || isDisable || isSuccess}
      theme={theme || DEFAULT_BUTTON}
      color={color}
      pattern={pattern}
    >
      {renderContent()}
    </ButtonStyled>
  );
};
