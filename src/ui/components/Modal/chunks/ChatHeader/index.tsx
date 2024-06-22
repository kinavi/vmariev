import React from 'react';
import { Button } from '../../../Button';
import { Icon } from '../../../Icon';
import { HeaderPropsType } from '../../types';
import { ChatHeaderContainer } from './styled';
import classNames from 'classnames';

export const ChatHeader = (props: HeaderPropsType) => {
  const {
    title,
    onClose,
    isDisable,
    onBack,
    className,
    pattern = 'white',
  } = props;

  const mix = classNames(`chat-header__${pattern}`, className);

  return (
    <ChatHeaderContainer className={mix}>
      {onBack && (
        <Button
          isDisable={isDisable}
          onClick={onBack}
          className="modal-header__button"
        >
          <Icon type="ChevronRight" />
        </Button>
      )}
      {title && <span>{title}</span>}
      {onClose && (
        <Button
          isDisable={isDisable}
          onClick={onClose}
          className="modal-header__button"
        >
          <Icon
            type="cross"
            size="20"
          />
        </Button>
      )}
    </ChatHeaderContainer>
  );
};
