import styled, { css } from 'styled-components';
import { ITheme } from '../../context/types';
/* eslint-disable */
export const Container = styled.div<{
  notMargin: boolean;
  direction?: 'left' | 'right';
  sizeIndicator?: '16' | '18';
  theme: ITheme;
}>`
  user-select: none;
  display: flex;
  width: 100%;
  align-items: center;
  width: auto;

  & input {
    position: absolute;
    z-index: -1;
    opacity: 0;

    &:disabled:checked + label:before {
      background-color: #a2aab8;
      background-image: url("data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='white' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.23559 0.738866C9.57437 1.07068 9.58963 1.62447 9.26967 1.9758L4.48842 7.22579C4.3319 7.39766 4.11498 7.49653 3.88705 7.49991C3.65912 7.50329 3.43957 7.41088 3.27838 7.24372L0.747129 4.61872C0.417624 4.27701 0.417624 3.72299 0.747129 3.38128C1.07663 3.03957 1.61087 3.03957 1.94037 3.38128L3.85771 5.36963L8.04283 0.774207C8.36279 0.422878 8.89681 0.407056 9.23559 0.738866Z' fill='white'/%3E%3C/svg%3E%0A");
      background-repeat: no-repeat;
      background-position: center center;
    }

    &:disabled + label:before {
      background: #d1d5db;
    }

    &:focus + label:before {
      border: 1px solid #3686ff;
    }
    &:checked + label:before {
      background-color: #3686ff;
      background-image: url("data:image/svg+xml,%3Csvg width='10' height='8' viewBox='0 0 10 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.23559 0.738866C9.57437 1.07068 9.58963 1.62447 9.26967 1.9758L4.48842 7.22579C4.3319 7.39766 4.11498 7.49653 3.88705 7.49991C3.65912 7.50329 3.43957 7.41088 3.27838 7.24372L0.747129 4.61872C0.417624 4.27701 0.417624 3.72299 0.747129 3.38128C1.07663 3.03957 1.61087 3.03957 1.94037 3.38128L3.85771 5.36963L8.04283 0.774207C8.36279 0.422878 8.89681 0.407056 9.23559 0.738866Z' fill='white'/%3E%3C/svg%3E%0A");
    }
  }

  & label {
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    width: inherit;

    color: #172b4d;
    font-family: Roboto;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;

    ${({ direction }) =>
      direction === 'left' &&
      css`
        flex-direction: row-reverse;
      `}

    &:before {
      margin-top: 2px;
      margin-bottom: 2px;
      box-sizing: border-box;
      content: '';
      display: inline-block;
      width: ${({ sizeIndicator }) => sizeIndicator}px;
      height: ${({ sizeIndicator }) => sizeIndicator}px;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #d1d5db;
      border-radius: 3px;
      background-color: #ffffff;
      background-repeat: no-repeat;
      background-position: center center;
      margin-right: 12px;
      ${({ direction }) =>
        direction === 'left' &&
        css`
          margin-left: 12px;
          margin-right: 0;
        `}
      ${({ notMargin }) =>
        notMargin &&
        css`
          margin: 0;
        `}
    }
  }
  &.quiz__option {
    padding-bottom: 8px;

    :last-child {
      padding-bottom: 0;
    }
  }
`;
