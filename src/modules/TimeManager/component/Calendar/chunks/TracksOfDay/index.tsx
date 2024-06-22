import { observer } from 'mobx-react-lite';
import format from 'date-fns/format';
import {
  convertCountToHour,
  convertCountToMinutes,
  convertCountToSeconds,
} from '../../../../utils';
import { TracksOfDayPropsType } from './types';
import { Track } from '../../../Track';
import styled from 'styled-components';

const TracksOfDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  & .tracks-of-day {
    &__header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
export const TracksOfDay = observer((props: TracksOfDayPropsType) => {
  const {
    task: {
      calendar: { totalTracksTime, targetDate },
    },
    tracksOfDay,
    targetDay,
  } = props;

  const totalSeconds = convertCountToSeconds(totalTracksTime);
  const totalMinutes = convertCountToMinutes(totalTracksTime);
  const totalHours = convertCountToHour(totalTracksTime);

  return (
    <TracksOfDayContainer>
      <div className="tracks-of-day__header">
        <div>{format(targetDate.setDate(targetDay), 'dd MMMM yyyy')}</div>
        <div>{`${totalHours}:${totalMinutes}:${totalSeconds}`}</div>
      </div>
      {tracksOfDay.map((item) => (
        <Track
          key={`trackOfDay-${item.id}`}
          value={item}
        />
      ))}
    </TracksOfDayContainer>
  );
});
