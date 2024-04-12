import styled from 'styled-components';
import { LayoutContainer } from '../../styled';

export const ContactContainer = styled(LayoutContainer)`
  max-width: 480px;
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
      @media only screen and (max-width: 756px) {
        flex-direction: row;
        align-items: center;
        justify-content: center;
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
      font-family: Roboto;
      font-size: 28px;
      font-style: normal;
      font-weight: 400;
      line-height: 40px; /* 142.857% */
      margin-bottom: 30px;
    }
    &__item {
      display: flex;
      gap: 20px;
      align-items: center;
      & a {
        color: #fff;
        font-family: Roboto;
        font-size: 28px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
