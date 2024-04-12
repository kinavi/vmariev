import styled from 'styled-components';

export const FieldContainer = styled.div<{ pattern: 'column' | 'row' }>`
  display: flex;
  flex-direction: ${({ pattern }) => pattern};
  gap: 4px;
  &:last-child {
    margin-bottom: 0;
  }
  & .field {
    &__header-container {
      display: flex;
      flex-direction: column;
    }
    &__label-container {
      display: flex;
      justify-content: space-between;
    }
    &__sub-label {
      font-weight: 400;
      font-size: 12px;
      line-height: 18px;
      color: #748094;
      margin-bottom: 8px;
    }
    &__body {
      display: flex;
    }
    &__error {
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: 18px;
      color: #ff3c26;
    }
    &__info {
      font-size: 12px;
      line-height: 18px;
      color: #748094;
    }
    &__label {
      display: flex;
      align-items: center;
      gap: 4px;
      &_size {
        &-m {
          font-size: 13px;
          font-style: normal;
          font-weight: 400;
          line-height: 20px;
          color: #172b4d;
        }
        &-l {
          font-weight: 500;
          font-size: 15px;
          line-height: 22px;
          margin-bottom: 2px;
        }
      }
    }
    &__hint {
      position: relative;
    }
    &__counter {
      color: #5d6b83;
      font-family: Roboto;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
  }
`;
