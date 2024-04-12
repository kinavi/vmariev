import { css } from 'styled-components';
import { ITheme } from '../../../context/types';
import { ButtonPropsType } from '../types';

export const ButtonFillPattern = (
  theme: ITheme,
  color: NonNullable<ButtonPropsType['color']>
) => css`
  background: ${theme.colors.get(color)?.origin};
  color: white;
  & svg {
    fill: white;
  }
  border: 1px solid ${theme.colors.get(color)?.origin};
  min-width: 100px;
  text-align: center;
  border-radius: 50px;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    background: ${theme.colors.get(color)?.[70]};
    border: 1px solid ${theme.colors.get(color)?.[70]};
  }

  &:focus:not(:disabled) {
    background: ${theme.colors.get(color)?.[50]};
    border: 1px solid ${theme.colors.get(color)?.[50]};
  }

  &:active:not(:disabled) {
    background: ${theme.colors.get(color)?.[50]};
    border: 1px solid ${theme.colors.get(color)?.[50]};
  }

  &:disabled {
    background: ${theme.colors.get('text')?.[90]};
    color: ${theme.colors.get('text')?.[70]};
    border: 1px solid ${theme.colors.get('text')?.[90]};
    cursor: not-allowed;
    & svg {
      fill: ${theme.colors.get('text')?.[70]};
    }
  }

  &.button_loading {
    background: ${theme.colors.get(color)?.[90]};
    color: ${theme.colors.get(color)?.[70]};
    border: 1px solid ${theme.colors.get(color)?.[90]};

    cursor: not-allowed;
    & svg {
      fill: ${theme.colors.get(color)?.[70]};
    }
  }

  &.button_success {
    background: ${theme.colors.get(color)?.[90]};
    color: ${theme.colors.get(color)?.[70]};
    border: 1px solid ${theme.colors.get(color)?.[90]};

    cursor: not-allowed;
    & svg {
      fill: ${theme.colors.get(color)?.[70]};
    }
  }
`;
