import React, { useState } from 'react';
import { IconStyled, ButtonStyled, Container, DropDownWrapper } from './styled';
import classNames from 'classnames';
import { DropDownPropsType } from './types';

export const DropDown = (props: DropDownPropsType) => {
  const {
    children,
    content,
    className,
    size,
    pattern = 'none',
    isHiddenIndicator = false,
    isDisable,
    isLoading,
    isHoverShow,
    isReadonly,
    onOpen = () => {},
    onClose = () => {},
  } = props;

  const [showMenu, setShowMenu] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    e.preventDefault();
    if (!showMenu) {
      onOpen();
    }
    if (showMenu) {
      onClose();
    }
    setShowMenu((currentValue) => !currentValue);
  };

  const mix = classNames(
    'drop-down',
    { 'drop-down_open': showMenu },
    className
  );

  if (isReadonly) {
    return <div className={mix}>{children}</div>;
  }

  return (
    <DropDownWrapper onClickOutside={() => setShowMenu(false)}>
      <Container
        className={mix}
        onMouseEnter={isHoverShow ? () => setShowMenu(true) : () => {}}
        onMouseLeave={isHoverShow ? () => setShowMenu(false) : () => {}}
      >
        <ButtonStyled
          isDisable={isDisable}
          onClick={handleClick}
          pattern={pattern}
          size={size}
          isLoading={isLoading}
          isFullWight
        >
          <>
            <div className="drop-down__context">{children}</div>
            {!isHiddenIndicator && (
              <IconStyled
                className="drop-down__icon"
                size="12"
                type="chevronDown"
                color="white"
              />
            )}
          </>
        </ButtonStyled>
        {showMenu && !isDisable && content(() => setShowMenu(false))}
      </Container>
    </DropDownWrapper>
  );
};
