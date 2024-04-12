import styled from 'styled-components';
import { LayoutContainer } from '../../styled';

export const ServicesContainer = styled(LayoutContainer)`
  & .services {
    &__price {
      color: #c49e6e;
      text-align: right;
      font-family: Roboto;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px;
    }
    &__button {
      padding: 0 10px;
      color: #c49e6e;
      text-align: center;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px;
      text-transform: uppercase;
      border-radius: 6px;
      border: 1px solid #c49e6e;
      text-decoration: none;
      &:hover {
        background: #c49e6e;
        color: #1c2727;
      }
    }
    &__button-container {
      display: flex;
      gap: 50px;
    }
    &__list {
      justify-content: center;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
      column-gap: 40px;
      row-gap: 40px;
    }
    &__cell {
      border-radius: 6px;
      background: #2b3b3b;
    }
  }

  & .cell {
    padding: 30px;
    display: flex;
    flex-direction: column;
    height: 300px;
    gap: 15px;

    &__header {
      color: #fff;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px; /* 166.667% */
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__label {
      color: #fff;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px; /* 250% */
      text-transform: uppercase;
      border-radius: 50px;
      background: #1c2727;
      min-width: 30px;
      min-height: 30px;
      text-align: center;
      padding: 0 10px;
      text-transform: uppercase;

      text-overflow: ellipsis;
      overflow: hidden;
    }
    &__label-list {
      display: flex;
      gap: 20px;
    }
    &__text {
      color: var(--gray-text, #97989b);
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px; /* 133.333% */
      min-width: 0;

      -webkit-line-clamp: 5;
      /* autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
    }
  }
  @media only screen and (max-width: 756px) {
    & .services {
      &__list {
        justify-content: center;
        display: grid;
        grid-template-columns: repeat(auto-fit, 100%);
        column-gap: 40px;
        row-gap: 40px;
      }
    }
  }
`;
