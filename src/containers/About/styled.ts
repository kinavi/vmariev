import styled from 'styled-components';
import { LayoutContainer } from '../../styled';

export const AboutContainer = styled(LayoutContainer)`
  display: flex;
  flex-direction: column;
  gap: 70px;
  & .advantage {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px;
    background: hsla(180, 16%, 20%, 1);
    border-radius: 6px;
    align-items: center;
    flex: 1 0 0;
    &__title {
      color: #fff;
      text-align: center;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 30px; /* 150% */
    }
    &__discription {
      color: var(--gray-text, #97989b);
      text-align: center;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 133.333% */
    }
  }
  & .about {
    &__button.button_size-xl:not(.button_link) {
      padding: 15px 24px;
      color: #fff;
      text-align: center;

      /* Заголовок 2 */
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 142.857% */
    }
    &__advantages-container {
      display: flex;
      gap: 40px;
    }
    &__about-container {
      display: flex;
    }
    &__name {
      color: var(--Secondary, #8ec46e);
      font-family: Roboto;
      font-size: 56px;
      font-style: normal;
      font-weight: 500;
      line-height: 60px; /* 107.143% */
    }
    &__position {
      color: #fff;
      font-family: Roboto;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px; /* 142.857% */
    }
    &__img-container {
      & img {
        border-radius: 50%;
        width: 500px;
        height: 500px;
        object-fit: cover;
      }
    }
    &__info-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 30px;
      justify-content: center;
    }
    &__info {
      padding: 40px;
      flex: 1;
    }
    &__hello {
      color: #8ec46e;
      font-family: Roboto;
      font-size: 36px;
      font-style: italic;
      font-weight: 700;
      line-height: 40px;
      margin-bottom: 20px;
    }
    &__iam {
      color: #fff;
      font-family: Roboto;
      font-size: 24px;
      font-style: italic;
      font-weight: 300;
      line-height: 40px;
      margin-bottom: 16px;
    }
    &__text {
      color: #fff;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px;
    }
    &__primary {
      color: #8ec46e;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px;
    }
    &__direction {
      margin-top: 30px;
    }
  }

  & .direction {
    &__title {
      align-items: center;
      display: flex;
      gap: 12px;
      color: #8ec46e;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px;
    }
  }

  @media only screen and (max-width: 1024px) {
    & .about {
      &__img-container {
        & img {
          width: 400px;
          height: 400px;
        }
      }
    }
  }

  @media only screen and (max-width: 756px) {
    gap: 100px;
    & .about {
      &__button.button_size-xl:not(.button_link) {
        padding: 13px 26px;
        width: 100%;
        max-width: none;
        font-size: 24px;
        line-height: 40px;
      }
      &__about-container {
        flex-direction: column-reverse;
        /* margin-top: 80px; */
        align-items: center;
      }
      &__img-container {
        display: flex;
        /* margin: 60px 0; */
        margin-bottom: 60px;
        & img {
          width: 80%;
          height: 80%;
          margin: auto;
        }
      }
      &__info-container {
        gap: 25px;
        align-items: center;
      }
      &__name {
        text-align: center;
        font-size: 44px;
        font-weight: 500;
        line-height: 50px; /* 104.167% */
      }
      &__position {
        text-align: center;
        font-size: 28px;
        line-height: 60px; /* 166.667% */
        margin-bottom: 35px;
      }
      &__advantages-container {
        flex-direction: column;
      }
    }
  }
  @media only screen and (max-width: 420px) {
    & .about {
      &__name {
        font-size: 40px;
        line-height: 50px;
      }
      &__position {
        font-size: 26px;
        line-height: 40px;
      }
      &__button.button_size-xl:not(.button_link) {
        padding: 12px 26px;
        width: 100%;
        max-width: none;
        font-size: 20px;
        line-height: 40px;
      }
    }
  }
`;
