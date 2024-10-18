import styled from 'styled-components';

export const GiftCardContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 20px;
  padding: 16px;
  background: white;
  z-index: 2;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  & img {
    width: 200px;
  }
  & .gift-card {
    &__content {
      flex-grow: 1;
    }
    &__title {
      font-size: 22px;
      line-height: 30px;
      text-align: center;
      margin-bottom: 16px;
    }
    &__text {
      text-align: center;
      line-height: 30px;
    }
  }
`;
