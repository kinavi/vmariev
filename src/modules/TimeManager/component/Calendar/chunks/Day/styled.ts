import styled from 'styled-components';
import { Button } from '../../../../../../ui/components/Button';

export const DayContainer = styled(Button)`
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #2b3b3b;
  border-radius: 12px;
  color: white;
  flex: 1 1;
  & .day {
    &__number {
      font-size: 16px;
    }
    &__time {
      font-size: 13px;
      color: #c49e6e;
      &_not-time {
        color: #97989b;
      }
    }
  }

  &:disabled {
    opacity: 0.5;
  }

  &.day_active {
    background: #405959;
  }
`;
