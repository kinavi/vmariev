import React, { useEffect, useMemo, useState } from 'react';
import moment from 'moment';
import { TrackPropsType } from '../types';
import { Button } from '../UI/Button';
import { useInterval } from '../../hooks';
import {
  convertCountToHour,
  convertCountToMinutes,
  convertCountToSeconds,
} from '../../utils';
import { Icon } from '../../../../ui/components/Icon';

export const Track = (props: TrackPropsType): JSX.Element => {
  const {
    value: { dateStart, dateStop, onStop },
    limit = 2700, // 45 min
  } = props;

  const delay = 1000;
  const isStart = !dateStop;
  const deltaSeconds =
    moment(dateStop || undefined).diff(moment(dateStart), 's') || 0;
  const [counts, setCounts] = useState<number>(deltaSeconds);

  useInterval(() => setCounts(counts + 1), isStart ? delay : null);

  const progress = useMemo(() => {
    const percent = (counts / limit) * 100;
    if (percent > 100) {
      return 100;
    }
    return percent;
  }, [counts]);

  useEffect(() => {
    if (isStart && progress >= 100) {
      onStop();
    }
  }, [progress]);

  const sec = convertCountToSeconds(counts);
  const min = convertCountToMinutes(counts);
  const hour = convertCountToHour(counts);

  return (
    <div className="track">
      <div className="track__container">
        <div className="track__group">
          <div className="track__date">
            {moment(dateStart).format('MM.DD.YYYY')}
          </div>
          <div>{convertCountToMinutes(limit)} min</div>
          <div className="track__time">{`${hour}:${min}:${sec}`}</div>
        </div>
        <Button
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
        </Button>
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
