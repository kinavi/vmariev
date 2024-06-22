import styled, { css } from 'styled-components';

export const Container = styled.div`
  border-radius: 8px;
  background: #2b3b3b;
  max-width: 324px;
  width: 100%;

  z-index: 1200;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  & > * {
    &:first-child {
      border-radius: 4px 4px 0 0;
    }
    &:last-child {
      border-radius: 0 0 4px 4px;
    }
  }
  max-height: 100%;

  @media screen and (min-height: 650px) {
    max-height: 90vh;
  }
`;

export const CloseStyle = css`
  cursor: pointer;
  & svg {
    fill: #a2aab8;
    width: 20px;
    height: 20px;
  }
  &:hover svg {
    fill: #ff3c26;
  }
`;
