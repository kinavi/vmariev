import styled from 'styled-components';

export const ServiceLayoutContainer = styled.div`
  margin: auto;
  max-width: 1320px;
  width: 100%;
  & .service-layout {
    &__title {
      font-size: 38px;
      line-height: 40px;
      text-align: center;
      margin-bottom: 30px;
    }
    &__sign-title {
      font-size: 18px;
    }
    &__link {
      color: white;
      font-size: 18px;
      text-decoration: underline;
    }
    &__body {
      display: flex;
      & > * {
        flex: 1 1;
      }
      @media only screen and (max-width: 1024px) {
        flex-direction: column-reverse;
      }
    }
    &__button.button_size-xl:not(.button_link) {
      font-size: 18px;
    }
    &__left-column {
      padding: 44px 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 20px;
    }
    &__right-column {
      display: flex;
      gap: 20px;
      @media only screen and (max-width: 600px) {
        flex-direction: column;
      }
    }
  }
`;
