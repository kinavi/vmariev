import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FoodItemContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  padding: 16px;
  background: #ffffff;
  border-radius: 6px;
  text-decoration: none;
  color: #333;
  gap: 30px;
  & .food {
    &__title {
      font-size: 20px;
      line-height: 24px;
    }
    &__row {
      display: flex;
      flex-grow: 1;
      margin-top: 8px;
      justify-content: space-between;
    }
    &__content {
      flex-grow: 1;
      align-items: center;
    }
  }

  &:hover {
    filter: drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.1));
  }
`;
