import styled, { css } from 'styled-components';
import { ITheme } from '../../../../context/types';
import { ThemeableType } from '../../../../types';

export const DefaultItemContainer = styled.div<
  {
    isFocus: boolean;
    isChecked: boolean;
    isDisable: boolean;
    theme: ITheme;
  } & ThemeableType
>`
  cursor: pointer;
  display: flex;
  align-items: center;

  &:hover .default-item__indicator {
    ${({ isChecked, theme, color = 'primary' }) =>
      !isChecked &&
      css`
        border: 1px solid ${theme.colors.get(color)?.origin};
      `}
  }

  ${({ isDisable }) =>
    isDisable &&
    css`
      pointer-events: none;
      opacity: 0.7;
    `}

  & .default-item {
    &__indicator {
      margin-right: 8px;
      width: 16px;
      height: 16px;
      min-width: 16px;
      min-height: 16px;
      background: #ffffff;
      border: 1px solid #d1d5db;
      box-sizing: border-box;
      border-radius: 100px;
      ${({ isChecked, theme, color = 'primary' }) =>
        isChecked &&
        css`
          border: 4px solid ${theme.colors.get(color)?.origin};
        `}
      ${({ isFocus, theme, color = 'primary' }) =>
        isFocus &&
        css`
          border: 4px solid ${theme.colors.get(color)?.origin};
        `}
    }
  }
`;
