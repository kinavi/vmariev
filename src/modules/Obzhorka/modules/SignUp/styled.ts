import styled from 'styled-components';

export const SignUpContainer = styled.div`
  padding: 60px 20px;
  width: 100%;
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  & .sign-up {
    &__button-contianer {
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }
    &__logo {
      margin: 0 auto;
      width: 148px;
      height: 170px;
      margin-bottom: 20px;
    }
    &__title {
      font-size: 42px;
      line-height: 49px;
      text-align: center;
      color: #06b27b;
      margin-bottom: 30px;
    }
    &__form {
      display: flex;
      flex-direction: column;
      gap: 30px;
      margin-bottom: 30px;
    }
    &__fields {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    &__link {
      font-size: 20px;
      line-height: 30px;
      text-align: center;
      color: #32ade6;
      text-decoration: none;
    }
    &__button {
    }
    &__footer {
      font-weight: 300;
      font-size: 20px;
      line-height: 30px;
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    &__description {
      font-weight: 300;
      font-size: 18px;
      line-height: 30px;
      text-align: center;
    }
  }
`;
