import React, { useState } from 'react';
import classnames from 'classnames';
import { WithModePropsType, WithTracksPropsType } from '../types';
import { Track } from '../../Track';
import { observer } from 'mobx-react-lite';

export const withTracks = (
  Component: (props: WithModePropsType) => JSX.Element
) =>
  observer((props: WithTracksPropsType) => {
    const { mix, isReadonly = false, task, ...componentProps } = props;

    const [isShowTracks, setIsShowTracks] = useState(false);

    return (
      <div className={classnames('task__container', mix)}>
        <Component
          {...componentProps}
          task={task}
          isReadonly={isReadonly}
          onClick={() => setIsShowTracks((v) => !v)}
        />
        {isReadonly &&
          isShowTracks &&
          task.tracks.map((track) => (
            <Track
              key={`track-item_${track.id}`}
              value={track}
            />
          ))}
      </div>
    );
  });
