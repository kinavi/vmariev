import styled from 'styled-components';
import { CloseStyle } from '../ModalComponent/styled';

export const CustomHeaderContainer = styled.div<{ isLoading?: boolean }>`
  & .custom-header {
    &__title {
      padding: 14px 16px;
      box-sizing: border-box;
      font-size: 16px;
      line-height: 24px;
      color: #172b4d;
      width: 100%;
      display: flex;
    }
    &__button {
      position: absolute;
      right: 8px;
      top: 8px;
      z-index: 5;
      ${CloseStyle};
    }
    &__icon {
      opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
    }
    &__info {
      margin-top: 3px;
      font-weight: 400;
      font-size: 13px;
      line-height: 15px;
      color: #748094;
    }
    &__title-content {
      width: 100%;
    }
  }
`;
