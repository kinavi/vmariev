import React from 'react';
import { Button } from '../../../Button';
import { OptionListPropsType } from './types';
import { guid } from '../../../../../helpers/functions';

export const OptionList = (props: OptionListPropsType) => {
  const { options, onClose } = props;

  const handleClick = (onClick: () => void) => () => {
    onClose();
    onClick();
  };

  return (
    <>
      {options
        .filter((item) => !item.isHidden)
        .map((item) => (
          <Button
            className="menu__options"
            key={`menu-options_${guid()}`}
            onClick={handleClick(item.onClick)}
          >
            {item.content}
          </Button>
        ))}
    </>
  );
};
