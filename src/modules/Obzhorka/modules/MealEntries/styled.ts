import styled from 'styled-components';

export const MealEntriesContainer = styled.div`
  & .meal-entries {
    &__date-container {
      flex-grow: 1;
    }
    &__row {
      display: flex;
      justify-content: center;
      gap: 30px;
    }
  }
`;
