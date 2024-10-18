import React, { useEffect, useState } from 'react';
import classes from './Timer.module.scss';
import styled from 'styled-components';
import { formatNumeralsText } from '../../helpers/functions';

type TimerPropsType = {
  className?: string;
  initialDate: string;
  color?: string;
  onAfterTime: () => void;
};

const Timer = (props: TimerPropsType) => {
  const { className, initialDate, color, onAfterTime } = props;
  const setTimer = (date: string | null) => {
    const futureDate = date ? new Date(date) : new Date();
    const nowDate = new Date();
    const delay = (futureDate.getTime() - nowDate.getTime()) / 1000;

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (delay > 0) {
      days = Math.floor(delay / (24 * 3600));
      hours = Math.floor(delay / 3600) - days * 24;
      minutes = Math.floor(delay / 60) - (hours + days * 24) * 60;
      seconds = Math.floor(delay - (minutes + (hours + days * 24) * 60) * 60);
    }

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [time, setTime] = useState(setTimer(initialDate || null));

  const cls = [className, classes.timer];

  useEffect(() => {
    const delay = new Date(initialDate).getTime() - new Date().getTime();
    if (delay > 0) {
      setTimeout(() => {
        setTime(setTimer(initialDate));
      }, 1000);
    } else {
      onAfterTime();
    }
  }, [time]);

  const sortTime = (number: number) => {
    if (number < 10) {
      return '0' + number;
    }
    return number;
  };

  const date = [
    {
      number: sortTime(time?.days),
      unit: formatNumeralsText(time?.days, { 1: 'день', 2: 'дня', 5: 'дней' }),
    },
    {
      number: sortTime(time?.hours),
      unit: formatNumeralsText(time?.hours, {
        1: 'час',
        2: 'часа',
        5: 'часов',
      }),
    },
    {
      number: sortTime(time?.minutes),
      unit: formatNumeralsText(time?.minutes, {
        1: 'минута',
        2: 'минуты',
        5: 'минут',
      }),
    },
    {
      number: sortTime(time?.seconds),
      unit: formatNumeralsText(time?.seconds, {
        1: 'секунда',
        2: 'секунды',
        5: 'секунд',
      }),
    },
  ];

  return (
    <div className={cls.join(' ')}>
      {date.map((item, index) => {
        return (
          <Container
            key={index}
            className={classes.item}
            color={color}
          >
            <span className={classes.number}>{item.number}</span>
            <span className={classes.unit}>{item.unit}</span>
          </Container>
        );
      })}
    </div>
  );
};

const Container = styled.div`
  span {
    color: ${(props) => props.color} !important;
  }
`;

export default Timer;
