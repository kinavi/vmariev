import styled from 'styled-components';

export const CustomDotContainer = styled.button`
  background: none;
  border: none;
  outline: none;
  & .custom-dot {
    &__dot {
      border-radius: 50px;
      border: 1px solid #c49e6e;
      background: #3c4b4b;
      width: 16px;
      height: 16px;
      &_active {
        background: #c49e6e;
      }
    }
  }
`;
