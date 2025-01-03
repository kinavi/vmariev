import styled from 'styled-components';

export const MealEntryItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 16px;
  background: #ffffff;
  border-radius: 6px;
  text-decoration: none;
  color: #333;
  font-size: 16px;
  gap: 8px;
  & .meal-entry-item {
    &__title {
      font-size: 20px;
    }
  }
`;
