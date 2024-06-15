import styled from 'styled-components';
import { LayoutContainer } from '../../styled';

export const ContactContainer = styled(LayoutContainer)`
  padding-bottom: 150px;
  & .contact {
    &__title {
      color: #fff;
      font-family: Roboto;
      font-size: 38px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px;
      text-align: center;
      margin-bottom: 30px;
    }
    &__list {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      @media only screen and (max-width: 756px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 40px;
      }
    }
    &__content {
      border-radius: 6px;
      background: #2b3b3b;
      padding: 30px 60px 40px;
    }
    &__name {
      color: var(--Secondary, #8ec46e);
      text-align: center;
      font-size: 28px;
      line-height: 40px; /* 142.857% */
      margin-bottom: 30px;
    }
    &__item {
      display: flex;
      gap: 20px;
      align-items: center;
      & a {
        color: white;
        font-size: 28px;
        font-weight: 500;
        line-height: 30px;
        text-decoration: none;
        @media only screen and (max-width: 756px) {
          font-size: 20px;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
