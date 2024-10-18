import styled, { css } from 'styled-components';

export const ToolbarContainer = styled.div<{ isCollapse: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #f5f5f5;
  z-index: 1;
  & .toolbar {
    &__collapse-button {
      background: white;
      padding: 16px;
      width: 100%;
      display: flex;
      gap: 20px;
      align-items: center;
      justify-content: center;
      box-shadow: 1px 0px 2px rgba(0, 0, 0, 0.15);
    }
    &__list {
      display: flex;
      flex-direction: column;
      gap: 10px;
      padding: 0 16px;
      height: 0px;
      transition: height 0.4s;
      overflow-y: auto;
      overflow-x: hidden;
      width: 100%;
      max-width: 520px;
      margin: auto;
      & > *:first-child {
        margin-top: 16px;
      }
      & > *:last-child {
        margin-bottom: 16px;
      }
    }
  }
  ${({ isCollapse }) =>
    !isCollapse &&
    css`
      & .toolbar {
        &__list {
          height: 70vh;
          transition: height 0.4s;
        }
      }
    `}
`;
