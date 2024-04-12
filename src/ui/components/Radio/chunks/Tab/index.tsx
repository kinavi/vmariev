import React, { useContext } from 'react';
import { TabContainer } from './styled';
import { TabType } from './types';
import classNames from 'classnames';
import { IContentProperties } from '../../types';
import { ThemeContext } from '../../../../context/ThemeContext';

export const Tab = (props: IContentProperties & { onClick: () => void }) => {
  const { onClick, isDisable, isChecked, Content } = props;
  const mix = classNames('tab');
  const theme = useContext(ThemeContext);

  return (
    <TabContainer
      className={mix}
      onClick={onClick}
      theme={theme || {}}
    >
      <>
        <div className="tab__label">{Content}</div>
        {isChecked && <div className="tab__active-marker" />}
      </>
    </TabContainer>
  );
};
