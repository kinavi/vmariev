import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 20px;
  & .auth {
    &__navigation {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      display: flex;
      padding: 20px;
      width: 100%;
      justify-content: space-between;
      align-items: center;
    }
    &__form {
      max-width: 400px;
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    &__row {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    &__send-button {
      min-width: 40px;
      min-height: 40px;
      display: flex;
      justify-content: center;
    }
  }
`;
