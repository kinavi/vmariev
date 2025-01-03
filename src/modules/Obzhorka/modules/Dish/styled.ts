import styled from 'styled-components';

export const DishContainer = styled.div`
  & .dish {
    &__title-container {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
