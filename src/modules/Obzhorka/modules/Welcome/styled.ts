import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html body {
        background: white;
    }
    #root {
        display: flex;
    }
`;

export const WelcomeContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
  padding: 60px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & .welcome {
    &__logo {
      width: 232px;
      height: 280px;
    }
    &__title {
      font-size: 42px;
      line-height: 49px;
      text-align: center;
      color: #06b27b;
    }
    &__header {
      margin: 40px 0;
    }
    &__slogan {
      font-style: italic;
      font-size: 18px;
      line-height: 28px;
      text-align: center;
      color: #ff7b39;
    }
    &__text {
      font-weight: 300;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
      color: #34353a;
    }
    &__button {
      max-width: 310px;
      margin: 40px 0 0;
    }
  }
`;
