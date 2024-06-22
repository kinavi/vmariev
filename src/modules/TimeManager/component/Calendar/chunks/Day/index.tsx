import { observer } from 'mobx-react-lite';
import { Task } from '../../../../mobx/models/Task';
import {
  convertCountToHour,
  convertCountToMinutes,
  convertCountToSeconds,
} from '../../../../utils';
import classNames from 'classnames';
import { DayContainer } from './styled';

export const Day = observer(
  (props: {
    numberDay: number;
    task: Task;
    isDisable?: boolean;
    isActive: boolean;
    onClick: () => void;
  }) => {
    const { numberDay, task, isDisable = false, isActive, onClick } = props;
    const time = task.calendar.getTimeByNumberDay(numberDay);
    const totalSeconds = convertCountToSeconds(time);
    const totalMinutes = convertCountToMinutes(time);
    const totalHours = convertCountToHour(time);

    const mix = classNames({
      day_active: isActive,
    });

    return (
      <DayContainer
        className={mix}
        isDisable={isDisable}
        onClick={onClick}
      >
        <div className="day__number">{numberDay}</div>
        <div
          className={classNames('day__time', { 'day__time_not-time': !time })}
        >{`${totalHours}:${totalMinutes}:${totalSeconds}`}</div>
      </DayContainer>
    );
  }
);
