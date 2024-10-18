import { useState } from 'react';
import { Icon } from '../../../../../../ui/components/Icon';
import { ToolbarContainer } from './styled';
import { ToolbarPropsType } from './types';
import { Gift } from '../Gift';

export const Toolbar = (props: ToolbarPropsType) => {
  const { position, gifts, onSelect } = props;
  const [isCollapse, setIsCollapse] = useState(true);

  return (
    <ToolbarContainer isCollapse={isCollapse}>
      <div className={'toolbar__list'}>
        {gifts.map((item) => (
          <Gift
            key={`gift-${item.title}`}
            myPosiotion={position}
            gift={item}
            onCLick={onSelect}
          />
        ))}
      </div>
      <button
        className="toolbar__collapse-button"
        onClick={() => setIsCollapse((v) => !v)}
      >
        Список подарков
        {isCollapse ? (
          <Icon
            color="#fdd504"
            type="chevronUp"
          />
        ) : (
          <Icon
            color="#fdd504"
            type="chevronDown"
          />
        )}
      </button>
    </ToolbarContainer>
  );
};
