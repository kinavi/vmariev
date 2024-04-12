import React, { useContext } from 'react';
import { ClassicButtonContainer } from './styled';
import { TabType } from './types';
import classNames from 'classnames';
import { IContentProperties } from '../../types';
import { ThemeContext } from '../../../../context/ThemeContext';

export const ClassicButton = (
  props: IContentProperties & { onClick: () => void }
) => {
  const { onClick, isDisable, isChecked, Content } = props;
  const mix = classNames('tab', { tab_checked: isChecked });
  const theme = useContext(ThemeContext);

  return (
    <ClassicButtonContainer
      className={mix}
      onClick={onClick}
      theme={theme || {}}
    >
      {Content}
    </ClassicButtonContainer>
  );
};
