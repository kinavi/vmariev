import { css } from 'styled-components';

export const NonePattern = css`
  background: none;
  align-items: center;
  justify-content: center;

  &:disabled {
    cursor: not-allowed;
    color: #a2aab8;
  }
  &:hover:disabled {
    color: #a2aab8;
  }
`;
