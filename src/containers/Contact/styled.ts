import styled from 'styled-components';
import { LayoutContainer } from '../../styled';

export const ContactContainer = styled(LayoutContainer)`
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
        align-items: center;
        justify-content: center;
      }
    }
    &__content {
      border-radius: 6px;
      background: #2b3b3b;
      padding: 30px 60px;
    }
    &__name {
      color: var(--Secondary, #8ec46e);
      text-align: center;
      font-size: 28px;
      line-height: 40px; 
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
