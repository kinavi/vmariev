import format from 'date-fns/format';
import { Icon } from '../../../../ui/components/Icon';
import { Task } from '../../mobx/models/Task';
import { Button } from '../UI/Button';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { translate } from '../../../../translator';
import startOfMonth from 'date-fns/startOfMonth';
import getDay from 'date-fns/getDay';
import getDate from 'date-fns/getDate';
import endOfMonth from 'date-fns/endOfMonth';
import { guid } from '../../../../helpers/functions';
import { Day } from './chunks/Day';
import { CalendarContainer } from './styled';
import { Loader } from '../../../../ui/components/Loader';
import { TracksOfDay } from './chunks/TracksOfDay';

export const Calendar = observer(
  (props: { task: Task; isExcludeFuture?: boolean }) => {
    const { task, isExcludeFuture = false } = props;
    const {
      targetDate,
      toggleToPreviousMonth,
      toggleToNextMonth,
      toggleDay,
      targetDay,
      status: { isLoading, isReady },
      tracksOfDay,
      totalTracksTime,
    } = task.calendar;

    // Определяем первый день текущего месяца
    const firstDayOfMonth = startOfMonth(targetDate);
    const lastDayOfMonth = endOfMonth(targetDate);

    // Определяем день недели для первого дня месяца (0 - воскресенье, 1 - понедельник, ... , 6 - суббота)
    const dayOfWeek = getDay(firstDayOfMonth) || 7;

    // Определяем количество дней в месяце
    const daysInMonth = getDate(lastDayOfMonth);

    const days = Array.from({ length: 49 }, (_, i) => {
      if (dayOfWeek <= i + 1 && dayOfWeek + daysInMonth >= i + 2) {
        return i - dayOfWeek + 2;
      }
      return null;
    });

    return (
      <CalendarContainer>
        <div className="calendar__header">
          <Button onClick={toggleToPreviousMonth}>
            <Icon
              type="ChevronLeft"
              color="white"
              size="18px"
            />
          </Button>
          <div className="calendar__title">
            {format(targetDate, 'MMMM yyyy')}
          </div>
          <Button onClick={toggleToNextMonth}>
            <Icon
              type="ChevronRight"
              color="white"
              size="18px"
            />
          </Button>
        </div>
        {isLoading && <Loader />}
        {isReady && (
          <div className="calendar__days-container">
            <div className="calendar__name-day">
              {translate.tryTranslate('пн')}
            </div>
            <div className="calendar__name-day">
              {translate.tryTranslate('вт')}
            </div>
            <div className="calendar__name-day">
              {translate.tryTranslate('ср')}
            </div>
            <div className="calendar__name-day">
              {translate.tryTranslate('чт')}
            </div>
            <div className="calendar__name-day">
              {translate.tryTranslate('пт')}
            </div>
            <div className="calendar__name-day">
              {translate.tryTranslate('сб')}
            </div>
            <div className="calendar__name-day">
              {translate.tryTranslate('вс')}
            </div>
            {days.map((day) =>
              day ? (
                <Day
                  key={guid()}
                  task={task}
                  numberDay={day}
                  //   isDisable={
                  //     isExcludeFuture &&
                  //     day > now.getDate() &&
                  //     isAfter(targetDate, now)
                  //   }
                  isActive={day === targetDay}
                  onClick={() => toggleDay(day)}
                />
              ) : (
                <div key={guid()} />
              )
            )}
          </div>
        )}
        {!!tracksOfDay.length && targetDay && (
          <TracksOfDay
            targetDay={targetDay}
            tracksOfDay={tracksOfDay}
            task={task}
          />
        )}
      </CalendarContainer>
    );
  }
);
