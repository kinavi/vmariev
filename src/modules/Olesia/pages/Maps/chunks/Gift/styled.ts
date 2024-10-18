import styled, { css } from 'styled-components';

export const GiftContainer = styled.button<{ showBorder: boolean }>`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: white;
  border-radius: 6px;
  border: 1px solid white;

  & .gift {
    &__info-container {
      display: flex;
      gap: 20px;
      font-size: 14px;
      color: #555f5f;
      line-height: 16px;
    }
    &__title {
      text-align: start;
      font-size: 18px;
      color: #ffaf1a;
      margin-bottom: 4px;
    }
    &__content {
      flex-grow: 1;
    }
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${({ showBorder }) =>
    showBorder &&
    css`
      border: 1px solid #ffaf1a;
    `}
`;
