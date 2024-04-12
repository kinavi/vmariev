import { css } from 'styled-components';
import { ButtonPropsType } from '../types';
import { ITheme } from '../../../context/types';

export const ButtonGhostPattern = (
  theme: ITheme,
  color: NonNullable<ButtonPropsType['color']>
) => css`
  color: ${theme.colors.get('text')?.origin};
  min-width: 100px;
  text-align: center;
  border-radius: 50px;
  align-items: center;
  justify-content: center;

  & svg {
    fill: ${theme.colors.get('text')?.origin};
  }

  &:hover:not(:disabled) {
    text-decoration: none;
    background: ${theme.colors.get('text')?.[90]};
    color: ${theme.colors.get('text')?.origin};
    & svg {
      fill: ${theme.colors.get('text')?.origin};
    }
  }

  &:focus:not(:disabled) {
    background: ${theme.colors.get('text')?.[80]};
    color: ${theme.colors.get('text')?.origin};
    & svg {
      fill: ${theme.colors.get('text')?.origin};
    }
  }

  &:active:not(:disabled) {
    background: ${theme.colors.get('text')?.[80]};
    color: ${theme.colors.get('text')?.origin};
    & svg {
      fill: ${theme.colors.get('text')?.origin};
    }
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
    color: ${theme.colors.get('text')?.[70]};

    cursor: not-allowed;
    & svg {
      fill: ${theme.colors.get('text')?.[70]};
    }
  }

  &.button_success {
    color: ${theme.colors.get('text')?.[70]};

    cursor: not-allowed;
    & svg {
      fill: ${theme.colors.get('text')?.[70]};
    }
  }
`;
