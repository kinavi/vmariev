import React from 'react';
import { Button } from '../../UI/Button';
import { ViewModePropsType } from '../types';
import {
  convertCountToHour,
  convertCountToMinutes,
  convertCountToSeconds,
} from '../../../utils';
import { observer } from 'mobx-react-lite';
import { Icon } from '../../../../../ui/components/Icon';

export const ViewMode = observer((props: ViewModePropsType) => {
  const {
    onClick,
    task: {
      name,
      toggleIsreadonly,
      totalTime,
      playedTrack,
      onStartTrack,
      onStopTrack,
    },
  } = props;

  const handleEditClick = () => {
    toggleIsreadonly(false);
  };

  const hasActiveTrack = false;
  const totalSeconds = convertCountToSeconds(totalTime);
  const totalMinutes = convertCountToMinutes(totalTime);
  const totalHours = convertCountToHour(totalTime);

  return (
    <>
      <Button
        mix="task__left-button task__button"
        onClick={handleEditClick}
      >
        <Icon
          type="Pen"
          color="white"
          size="16px"
        />
      </Button>
      <div className="task__body task__body_view">
        <Button
          mix="task__item-container"
          onClick={onClick}
        >
          <>
            <span className="task__label">{name}</span>
            <span className="task__time">
              {totalHours}:{totalMinutes}:{totalSeconds}
            </span>
          </>
        </Button>
      </div>
      <Button
        mix="task__button task__right-button"
        isHidden={hasActiveTrack}
        onClick={playedTrack ? onStopTrack : onStartTrack}
      >
        <Icon
          type={playedTrack ? 'Stop' : 'Play'}
          color="white"
          size="16px"
        />
      </Button>
    </>
  );
});
