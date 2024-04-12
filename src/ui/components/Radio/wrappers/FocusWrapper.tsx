import styled from 'styled-components';
import { FocusWrapperType } from '../types';
import { useState } from 'react';

const WithFocusContainer = styled.div`
  & .with-focus__input {
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 1px;
    opacity: 0;
    z-index: -1;
  }
`;

export const FocusWrapper: FocusWrapperType = (props) => {
  const { item, name, value, isDisable, onChange, children } = props;

  const [isFocus, setIsFocus] = useState(false);
  const isChecked = !!value && value === item.id;
  const handleClick = () => {
    onChange(item.id);
  };

  return (
    <WithFocusContainer>
      <input
        className="with-focus__input"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        id={`radio_item_${item.id}`}
        type="radio"
        name={name}
        value={item.id}
        checked={item.isChecked || isChecked}
        onChange={handleClick}
        disabled={item.isDisable || isDisable}
      />
      {children({ onClick: handleClick, isFocus, isChecked })}
    </WithFocusContainer>
  );
};
