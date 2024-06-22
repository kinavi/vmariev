import styled from 'styled-components';

export const ChatHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-shrink: 0;

  &.chat-header {
    &__white {
      padding: 14px 16px;
      background: white;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #172b4d;
      & .modal-header__button {
        position: absolute;
        top: 8px;
        right: 8px;
        & svg {
          fill: #a2aab8;
        }
        &:hover svg {
          fill: #ff3c26;
        }
      }
    }
    &__gray {
      padding: 13px 16px;
      font-family: Roboto;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      color: #172b4d;
      background: #f5f6f7;
      & .modal-header__button {
        & svg {
          fill: #a2aab8;
        }
        &:hover svg {
          fill: #ff3c26;
        }
      }
    }
  }
`;
