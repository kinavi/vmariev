import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & .calendar {
    &__header {
      display: flex;
      align-items: center;
    }
    &__title {
      flex-grow: 1;
      text-align: center;
    }
    &__name-day {
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__days-container {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      grid-template-rows: repeat(7, 1fr);
      column-gap: 6px;
      row-gap: 6px;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
  }
`;
