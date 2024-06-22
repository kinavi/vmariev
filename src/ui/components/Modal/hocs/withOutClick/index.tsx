import React, { useCallback, useEffect } from 'react';
import { OutClickWrapper } from '../../../../wrappers/OutClickWrapper';
import { WithOutClickType } from './types';

export const withOutClick: WithOutClickType = (Component) => (props) => {
  const { onClose, isDisable = false } = props;

  const handleClick = useCallback(
    (event: any) => {
      switch (event.code) {
        case 'Escape': {
          if (!isDisable && onClose) {
            onClose();
          }
          break;
        }
        default:
          break;
      }
    },
    [onClose, isDisable]
  );

  useEffect(() => {
    if (!isDisable) {
      document.addEventListener('keydown', handleClick);
    }
    return () => {
      if (!isDisable) {
        document.removeEventListener('keydown', handleClick);
      }
    };
  }, [handleClick, isDisable]);

  return onClose && !isDisable ? (
    <OutClickWrapper onClickOutside={onClose}>
      <Component {...props} />
    </OutClickWrapper>
  ) : (
    <Component {...props} />
  );
};
