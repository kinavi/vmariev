import styled from 'styled-components';
import { LayoutContainer } from '../../styled';

export const ReviewContainer = styled(LayoutContainer)`
  padding-bottom: 40px;
  position: relative;
  & .review {
    &__review-count {
      color: hsla(33, 42%, 60%, 1);
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    &__item {
    }
    &__list {
    }
  }
  & .review {
    &__container {
      border-radius: 6px;
      background: #2b3b3b;
      margin: 0 10px;
      padding: 30px;
      display: flex;
      align-items: normal;
      flex-direction: column;
      gap: 15px;
      min-height: 215px;
      justify-content: flex-start;
    }
    &__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__text {
      text-align: start;
      color: var(--gray-text, #97989b);
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      -webkit-line-clamp: 5;
      /* autoprefixer: off */
      -webkit-box-orient: vertical;
      /* autoprefixer: on */
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
    }
    &__name {
      color: #fff;
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px; /* 100% */
    }
  }
  & .react-multi-carousel-dot-list {
    gap: 12px;
  }
`;
