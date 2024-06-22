import React from 'react';
import classnames from 'classnames';
import { WithModePropsType, WithTracksPropsType } from '../types';
import { Track } from '../../Track';
import { observer } from 'mobx-react-lite';
import { Calendar } from '../../Calendar';

export const withTracks = (
  Component: (props: WithModePropsType) => JSX.Element
) =>
  observer((props: WithTracksPropsType) => {
    const { mix, isReadonly = false, task, ...componentProps } = props;
    const { toggleIsShowCalendar, isShowCalendar } = task.calendar;

    return (
      <div className="task__wrapper">
        <div className={classnames('task__container', mix)}>
          <Component
            {...componentProps}
            task={task}
            isReadonly={isReadonly}
            onClick={() => toggleIsShowCalendar(!isShowCalendar)}
          />
          {task.activeTrack && <Track value={task.activeTrack} />}
        </div>
        {isReadonly && isShowCalendar && (
          <Calendar
            task={task}
            isExcludeFuture
          />
        )}
      </div>
    );
  });
