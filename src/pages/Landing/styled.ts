import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    height: 100vh;
    background: #1C2727;
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
  }
  div {
    box-sizing: border-box;
  }
  #root {
    height: 100%;
  }
`;

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
        /* padding-top: 120px; */
        scroll-margin-top: 120px;
        &:last-child {
          scroll-margin-top: 0;
        }
        /* &:first-child { */
        /* padding-top: 0px; */
        /* } */
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
