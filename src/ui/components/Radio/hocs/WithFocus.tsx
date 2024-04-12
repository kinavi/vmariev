import React from 'react';
import { WithFocusType } from '../types';
import { FocusWrapper } from '../wrappers/FocusWrapper';

export const WithFocus: WithFocusType = (Component) => (props) => {
  const { isDisable, item, name, onChange, value } = props;
  return (
    <FocusWrapper {...props}>
      {({ isFocus, onClick, isChecked }) => (
        <Component
          {...item}
          isDisable={item.isDisable || isDisable}
          isFocus={isFocus}
          isChecked={item.isChecked || isChecked}
          onClick={onClick}
        />
      )}
    </FocusWrapper>
  );
};
