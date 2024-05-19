import styled from 'styled-components';

export const AppContainer = styled.div`
  & .app {
    &__body {
      width: 100%;
      margin: 0 auto;
      padding: 60px;
      display: flex;
      flex-direction: column;
      gap: 200px;
      & > * {
        scroll-margin-top: 120px;
        &:last-child {
          scroll-margin-top: 0;
        }
      }
    }
  }
  @media only screen and (max-width: 1024px) {
    & .app {
      &__body {
        padding: 20px 40px 90px 40px;
      }
    }
  }
  @media only screen and (max-width: 756px) {
    & .app {
      &__body {
        padding: 20px 25px;
      }
    }
  }
`;
