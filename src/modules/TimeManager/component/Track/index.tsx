import React, { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { TrackPropsType } from '../types';
import { useInterval } from '../../hooks';
import {
  convertCountToHour,
  convertCountToMinutes,
  convertCountToSeconds,
} from '../../utils';

export const Track = (props: TrackPropsType): JSX.Element => {
  const {
    value: { dateStart, dateStop, onStop, limitSeconds, getDeltaSeconds },
  } = props;

  const delay = 1000;
  const isStart = !dateStop;
  const [counts, setCounts] = useState<number>(getDeltaSeconds());

  useInterval(() => setCounts(counts + 1), isStart ? delay : null);

  useEffect(() => {
    const callback = () => {
      if (document.visibilityState === 'visible') {
        const updateValue = getDeltaSeconds();
        setCounts(updateValue);
      }
    };

    document.addEventListener('visibilitychange', callback);
    return () => {
      document.removeEventListener('visibilitychange', callback);
    };
  });

  const progress = useMemo(() => {
    const percent = (counts / limitSeconds) * 100;
    if (percent > 100) {
      return 100;
    }
    return percent;
  }, [counts, limitSeconds]);

  useEffect(() => {
    if (isStart && progress >= 100) {
      onStop();
    }
  }, [progress, isStart, onStop]);

  const sec = convertCountToSeconds(counts);
  const min = convertCountToMinutes(counts);
  const hour = convertCountToHour(counts);

  return (
    <div className="track">
      <div className="track__container">
        <div className="track__group">
          <div className="track__date">
            {moment(dateStart).format('DD.MM.YYYY HH:mm')}
          </div>
          <div>{convertCountToMinutes(limitSeconds)} min</div>
          <div className="track__time">{`${hour}:${min}:${sec}`}</div>
        </div>
        {/* <Button
          mix="track__button"
          onClick={onStop}
          isDisable={!isStart}
        >
          {isStart ? (
            <Icon
              type="Stop"
              size="10px"
              color="white"
            />
          ) : (
            <Icon
              type="Check"
              size="10px"
              color="white"
            />
          )}
        </Button> */}
      </div>
      <div
        className="track__progress-bar" // TODO: Надо через clip-path
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};
